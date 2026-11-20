create type public.app_role as enum ('admin');
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;
create policy "Users read own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create table public.admin_emails (email text primary key);
grant all on public.admin_emails to service_role;
alter table public.admin_emails enable row level security;
insert into public.admin_emails values ('info@eckaholdings.com');

create or replace function public.grant_admin_on_signup()
returns trigger language plpgsql security definer set search_path = public
as $$ begin
  if exists (select 1 from public.admin_emails where lower(email) = lower(new.email)) then
    insert into public.user_roles(user_id, role) values (new.id, 'admin') on conflict do nothing;
  end if;
  return new;
end $$;
create trigger on_auth_user_created_admin after insert on auth.users
for each row execute function public.grant_admin_on_signup();

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (char_length(email) <= 255),
  created_at timestamptz not null default now()
);
grant insert on public.newsletter_subscribers to anon, authenticated;
grant select, delete on public.newsletter_subscribers to authenticated;
grant all on public.newsletter_subscribers to service_role;
alter table public.newsletter_subscribers enable row level security;
create policy "Anyone can subscribe" on public.newsletter_subscribers for insert to anon, authenticated with check (true);
create policy "Admins read subscribers" on public.newsletter_subscribers for select to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete subscribers" on public.newsletter_subscribers for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  kind text not null default 'general' check (kind in ('general','rights')),
  name text not null check (char_length(name) <= 100),
  email text not null check (char_length(email) <= 255),
  company text, title text, phone text, reason text check (char_length(reason) <= 2000),
  catalog text, role text, assets text[], royalties text,
  followed_up boolean not null default false,
  followed_up_at timestamptz,
  created_at timestamptz not null default now()
);
grant insert on public.contact_submissions to anon, authenticated;
grant select, update on public.contact_submissions to authenticated;
grant all on public.contact_submissions to service_role;
alter table public.contact_submissions enable row level security;
create policy "Anyone can submit" on public.contact_submissions for insert to anon, authenticated with check (followed_up = false);
create policy "Admins read submissions" on public.contact_submissions for select to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins update submissions" on public.contact_submissions for update to authenticated using (public.has_role(auth.uid(), 'admin'));
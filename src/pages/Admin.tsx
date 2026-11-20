import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { monthlyCounts } from '@/lib/monthly';

type Submission = {
  id: string; kind: string; name: string; email: string; company: string | null; title: string | null;
  phone: string | null; reason: string | null; catalog: string | null; role: string | null;
  assets: string[] | null; royalties: string | null; followed_up: boolean; followed_up_at: string | null; created_at: string;
};
type Subscriber = { id: string; email: string; created_at: string };

const fmt = (d: string) => new Date(d).toLocaleString();
const csvCell = (v: string) => { const s = /^[=+\-@\t\r]/.test(v) ? `'${v}` : v; return `"${s.replace(/"/g, '""')}"`; };

const download = (name: string, rows: string[][]) => {
  const csv = rows.map(r => r.map(csvCell).join(',')).join('\n');
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  const a = document.createElement('a'); a.href = url; a.download = name; a.click();
  URL.revokeObjectURL(url);
};

const Login = () => {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(''); const [busy, setBusy] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setMsg('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg('Sign-in failed. Check your email and password.');
    setBusy(false);
  };
  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-24 bg-surface border border-gold/30 p-8 space-y-4">
      <span className="eyebrow-gold">Private</span>
      <h1 className="font-display text-3xl font-light">Admin <span className="italic text-gold">Sign In</span></h1>
      <Input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="rounded-none" />
      <Input type="password" required minLength={8} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="rounded-none" />
      {msg && <p className="text-sm text-foreground/70">{msg}</p>}
      <Button type="submit" disabled={busy} className="w-full bg-gold text-background hover:bg-gold-highlight rounded-none uppercase tracking-[0.25em] text-xs font-bold">
        Sign In
      </Button>
    </form>
  );
};

const FollowUpDraft = ({ id }: { id: string }) => {
  const [notes, setNotes] = useState('');
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [copied, setCopied] = useState(false);
  const run = async () => {
    setBusy(true); setErr(''); setCopied(false);
    const { data, error } = await supabase.functions.invoke('draft-followup', { body: { submissionId: id, notes } });
    if (error) {
      let msg = 'Could not draft a reply.';
      try { msg = (await (error as { context?: Response }).context?.json())?.error ?? msg; } catch { /* keep default */ }
      setErr(msg);
    } else setDraft(data.draft);
    setBusy(false);
  };
  return (
    <div className="sm:col-span-2 mt-3 border-t border-gold/10 pt-4 space-y-3">
      <p className="eyebrow-gold">AI Follow-up Draft</p>
      <Input value={notes} onChange={e => setNotes(e.target.value)} maxLength={2000} placeholder="Optional notes (e.g. offer Tuesday call, mention NDA)" className="rounded-none" />
      <Button onClick={run} disabled={busy} className="bg-gold text-background hover:bg-gold-highlight rounded-none uppercase tracking-[0.2em] text-xs">
        {busy ? 'Drafting…' : draft ? 'Redraft' : 'Draft follow-up'}
      </Button>
      {err && <p role="alert" className="text-sm text-destructive">{err}</p>}
      {draft && (
        <div className="space-y-2">
          <textarea value={draft} onChange={e => setDraft(e.target.value)} className="w-full min-h-[320px] bg-background border border-gold/20 p-3 text-sm text-foreground font-sans" />
          <button onClick={() => { navigator.clipboard.writeText(draft); setCopied(true); }} className="text-xs text-gold hover:underline">{copied ? 'Copied' : 'Copy to clipboard'}</button>
        </div>
      )}
    </div>
  );
};

const monthStr = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
const monthLabel = (m: string) => new Date(`${m}-01T00:00:00`).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });

const Insights = ({ subs, news }: { subs: Submission[]; news: Subscriber[] }) => {
  const now = new Date();
  const [from, setFrom] = useState(monthStr(new Date(now.getFullYear(), now.getMonth() - 5, 1)));
  const [to, setTo] = useState(monthStr(now));
  const presets: [string, number][] = [['3 months', 2], ['6 months', 5], ['12 months', 11]];
  const rows = from && to && from <= to ? monthlyCounts(news, subs, from, to) : [];
  const total = rows.reduce((a, r) => ({ newsletter: a.newsletter + r.newsletter, intro: a.intro + r.intro, catalog: a.catalog + r.catalog }), { newsletter: 0, intro: 0, catalog: 0 });
  const series = [
    { key: 'newsletter', label: 'Newsletter signups', color: 'hsl(var(--gold))' },
    { key: 'intro', label: 'Intro-call requests', color: 'hsl(var(--foreground) / 0.55)' },
    { key: 'catalog', label: 'Catalog valuations', color: 'hsl(var(--gold-highlight) / 0.45)' },
  ] as const;
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end gap-4">
        <label className="text-xs eyebrow">From<input type="month" value={from} max={to} onChange={e => setFrom(e.target.value)} className="block mt-1 h-10 px-3 bg-background border border-gold/20 text-foreground text-sm normal-case tracking-normal" /></label>
        <label className="text-xs eyebrow">To<input type="month" value={to} min={from} onChange={e => setTo(e.target.value)} className="block mt-1 h-10 px-3 bg-background border border-gold/20 text-foreground text-sm normal-case tracking-normal" /></label>
        <div className="flex gap-2">
          {presets.map(([l, n]) => (
            <button key={l} onClick={() => { setFrom(monthStr(new Date(now.getFullYear(), now.getMonth() - n, 1))); setTo(monthStr(now)); }}
              className="h-10 px-3 text-xs border border-gold/20 text-foreground/70 hover:border-gold hover:text-gold">{l}</button>
          ))}
        </div>
      </div>
      {rows.length === 0 ? <p className="text-foreground/50">Pick a start month before the end month.</p> : <>
      <div className="grid sm:grid-cols-3 gap-4">
        {series.map(s => (
          <div key={s.key} className="border border-gold/20 p-5">
            <p className="eyebrow mb-2">{s.label}</p>
            <p className="font-sans tabular-nums text-4xl font-light text-gold">{total[s.key]}</p>
          </div>
        ))}
      </div>
      <div className="h-80 border border-gold/10 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={rows.map(r => ({ ...r, label: monthLabel(r.month) }))}>
            <CartesianGrid stroke="hsl(var(--gold) / 0.1)" vertical={false} />
            <XAxis dataKey="label" stroke="hsl(var(--foreground) / 0.5)" fontSize={12} />
            <YAxis allowDecimals={false} stroke="hsl(var(--foreground) / 0.5)" fontSize={12} />
            <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--gold) / 0.3)' }} cursor={{ fill: 'hsl(var(--gold) / 0.05)' }} />
            <Legend />
            {series.map(s => <Bar key={s.key} dataKey={s.key} name={s.label} fill={s.color} />)}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <table className="w-full text-sm border border-gold/10">
        <thead><tr className="text-left eyebrow"><th className="p-3">Month</th>{series.map(s => <th key={s.key} className="p-3 text-right">{s.label}</th>)}</tr></thead>
        <tbody className="divide-y divide-gold/10">
          {[...rows].reverse().map(r => (
            <tr key={r.month}><td className="p-3">{monthLabel(r.month)}</td><td className="p-3 text-right">{r.newsletter}</td><td className="p-3 text-right">{r.intro}</td><td className="p-3 text-right">{r.catalog}</td></tr>
          ))}
        </tbody>
      </table>
      </>}
    </div>
  );
};

const Dashboard = ({ session }: { session: Session }) => {
  const [tab, setTab] = useState<'insights' | 'contacts' | 'newsletter'>('insights');
  const [subs, setSubs] = useState<Submission[]>([]);
  const [news, setNews] = useState<Subscriber[]>([]);
  const [open, setOpen] = useState<string | null>(null);

  const load = useCallback(async () => {
    const [a, b] = await Promise.all([
      supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
      supabase.from('newsletter_subscribers').select('*').order('created_at', { ascending: false }),
    ]);
    setSubs((a.data as Submission[]) ?? []); setNews((b.data as Subscriber[]) ?? []);
  }, []);
  useEffect(() => { load(); }, [load]);

  const toggle = async (s: Submission) => {
    const next = !s.followed_up;
    await supabase.from('contact_submissions').update({ followed_up: next, followed_up_at: next ? new Date().toISOString() : null }).eq('id', s.id);
    load();
  };

  const exportNews = () => download('ecka-newsletter.csv', [['Email', 'Subscribed'], ...news.map(n => [n.email, n.created_at])]);
  const exportContacts = () => download('ecka-contacts.csv', [
    ['Date', 'Type', 'Name', 'Email', 'Phone', 'Company', 'Title', 'Catalog', 'Role', 'Assets', 'Royalties', 'Message', 'Followed up'],
    ...subs.map(s => [s.created_at, s.kind, s.name, s.email, s.phone ?? '', s.company ?? '', s.title ?? '', s.catalog ?? '', s.role ?? '', (s.assets ?? []).join('; '), s.royalties ?? '', s.reason ?? '', s.followed_up ? 'Yes' : 'No']),
  ]);

  const tabBtn = (t: typeof tab, label: string) => (
    <button onClick={() => setTab(t)} className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border-b-2 ${tab === t ? 'border-gold text-gold' : 'border-transparent text-foreground/50'}`}>{label}</button>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-4xl font-light">Ecka <span className="italic text-gold">Admin</span></h1>
        <div className="flex items-center gap-4 text-sm text-foreground/50">
          {session.user.email}
          <button onClick={() => supabase.auth.signOut()} className="text-gold hover:underline">Sign out</button>
        </div>
      </div>
      <div className="flex justify-between items-end border-b border-gold/10 mb-6">
        <div>{tabBtn('insights', 'Dashboard')}{tabBtn('contacts', `Contact Submissions (${subs.length})`)}{tabBtn('newsletter', `Newsletter (${news.length})`)}</div>
        {tab !== 'insights' && <Button onClick={tab === 'contacts' ? exportContacts : exportNews} className="mb-2 bg-gold text-background hover:bg-gold-highlight rounded-none uppercase tracking-[0.2em] text-xs">
          Download CSV
        </Button>}
      </div>

      {tab === 'insights' ? <Insights subs={subs} news={news} /> : tab === 'contacts' ? (
        subs.length === 0 ? <p className="text-foreground/50">No submissions yet.</p> :
        <ul className="divide-y divide-gold/10 border border-gold/10">
          {subs.map(s => (
            <li key={s.id} className={s.followed_up ? 'opacity-60' : ''}>
              <div className="flex flex-wrap items-center gap-4 p-4">
                <button onClick={() => setOpen(open === s.id ? null : s.id)} className="flex-1 min-w-[200px] text-left">
                  <p className="font-medium">{s.name} <span className="text-xs text-gold uppercase tracking-wider ml-2">{s.kind === 'rights' ? 'Catalog' : 'Intro call'}</span></p>
                  <p className="text-sm text-foreground/50">{s.email} · {fmt(s.created_at)}</p>
                </button>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={s.followed_up} onChange={() => toggle(s)} className="accent-[hsl(var(--gold))] w-4 h-4" />
                  Followed up{s.followed_up_at && <span className="text-xs text-foreground/40">({new Date(s.followed_up_at).toLocaleDateString()})</span>}
                </label>
              </div>
              {open === s.id && (
                <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2 px-4 pb-4 text-sm">
                  {([['Phone', s.phone], ['Company', s.company], ['Title', s.title], ['Catalog', s.catalog], ['Role', s.role], ['Assets', s.assets?.join(', ')], ['Royalties', s.royalties]] as [string, string | null | undefined][])
                    .filter(([, v]) => v).map(([k, v]) => <div key={k}><dt className="eyebrow inline mr-2">{k}</dt><dd className="inline text-foreground/80">{v}</dd></div>)}
                  {s.reason && <div className="sm:col-span-2"><dt className="eyebrow mb-1">Message</dt><dd className="text-foreground/80 whitespace-pre-wrap">{s.reason}</dd></div>}
                  <FollowUpDraft id={s.id} />
                </dl>
              )}
            </li>
          ))}
        </ul>
      ) : (
        news.length === 0 ? <p className="text-foreground/50">No subscribers yet.</p> :
        <ul className="divide-y divide-gold/10 border border-gold/10">
          {news.map(n => <li key={n.id} className="flex justify-between p-4 text-sm"><span>{n.email}</span><span className="text-foreground/50">{fmt(n.created_at)}</span></li>)}
        </ul>
      )}
    </div>
  );
};

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setIsAdmin(null); return; }
    supabase.rpc('has_role', { _user_id: session.user.id, _role: 'admin' }).then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet><title>Admin | Ecka Holdings</title><meta name="robots" content="noindex, nofollow" /></Helmet>
      {!ready ? null : !session ? <Login /> : isAdmin === null ? null : isAdmin ? <Dashboard session={session} /> : (
        <div className="max-w-md mx-auto mt-24 text-center space-y-4">
          <p>This account doesn't have admin access.</p>
          <button onClick={() => supabase.auth.signOut()} className="text-gold hover:underline">Sign out</button>
        </div>
      )}
    </main>
  );
};

export default Admin;

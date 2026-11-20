DROP POLICY "Anyone can subscribe" ON public.newsletter_subscribers;
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(email) BETWEEN 3 AND 255
  AND email = lower(email)
  AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND created_at >= now() - interval '1 minute'
);
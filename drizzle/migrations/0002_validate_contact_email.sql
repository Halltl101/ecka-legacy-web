DROP POLICY "Anyone can submit" ON public.contact_submissions;
CREATE POLICY "Anyone can submit" ON public.contact_submissions FOR INSERT TO anon, authenticated
WITH CHECK (
  followed_up = false
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]{2,}$'
  AND char_length(name) BETWEEN 1 AND 100
);
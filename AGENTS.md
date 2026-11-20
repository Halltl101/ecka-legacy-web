# Project rules

- Keep intro-call scheduling in the shared LeadForm, using a separate booking URL helper; this keeps all call buttons consistent without changing catalog valuation submissions.
- The existing inquiry form opens an email draft rather than sending automatically; never describe opening the draft as confirmed delivery.- Contact form and newsletter submissions are stored in Lovable Cloud tables and reviewed at /admin; admin access is granted only via user_roles (auto-assigned on signup for emails in admin_emails), never client-side checks.

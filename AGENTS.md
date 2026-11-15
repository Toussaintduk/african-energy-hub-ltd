# Architecture rules
- Use the existing React/Vite application and React Router for dedicated content pages; keep the homepage concise.
- Store verified project, service and team records in shared data modules so browsing and detail pages use the same facts.
- Group photographs by project and provide accessible Radix dialog galleries rather than separate photo-as-project cards.
- Quote requests currently use validated email and WhatsApp handoffs; never report them as server-delivered submissions.
- Optional administration must use Lovable Cloud authentication, storage and authorization before any editor is exposed; never simulate admin access in browser storage.
- Do not expose company-profile downloads or exact map pins unless an approved document or verified coordinates are supplied.

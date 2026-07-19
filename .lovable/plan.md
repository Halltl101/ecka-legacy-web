## Move "Global Reach" wording into Our Approach section

**Changes**

1. `src/components/Hero.tsx` — Delete the entire Stats Ribbon section (currently only holds "Global / Reach"), since it will now live in Our Approach.

2. `src/components/WhyPartner.tsx` — Add a "Global Reach" editorial callout overlaid on the existing master-tapes image (in the currently empty right side of the gradient). Large gold display "Global" with an italic "Reach" underneath, matching the site's Cormorant/Karla + gold styling. No new data plumbing — pure presentation inside the existing image block.

**Result**

- Hero becomes cleaner without the stats strip.
- Our Approach gains a bold editorial anchor tying imagery to the "Global Access" pillar already listed.
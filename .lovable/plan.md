

## Plan: Add JSON-LD Schema Markup (LocalBusiness, Service, FAQPage, Organization)

### What
Add structured data to `src/pages/Index.tsx` via a single `<script type="application/ld+json">` injected into `<head>` using `useEffect`.

### Details

**File**: `src/pages/Index.tsx`

1. Extract the FAQ array (16 items, lines 550-566) into a constant before the component return.
2. Add a `useEffect` that creates and appends a JSON-LD script to `document.head` with a `@graph` containing:

   - **Organization**: name, url, logo, email, phone, sameAs
   - **LocalBusiness** (`ProfessionalService` subtype): name, address (Str. Campia Libertății 33, sector 3, București), phone, email, url, `openingHoursSpecification` set to **24/7** (all 7 days, 00:00-23:59)
   - **Service**: name "Optimizare SEO", provider reference to the LocalBusiness
   - **FAQPage**: `mainEntity` mapped from the 16 FAQ items, with `\n\n` in answers replaced by spaces

3. Cleanup: remove the script on unmount.

No new files or dependencies needed. Single edit to `src/pages/Index.tsx`.




## Plan

Update the comparison text sizes in `src/pages/Index.tsx`:

1. Split the text into separate elements with different mobile font sizes:
   - "indiferent dacă un client îți aduce 100€ sau 4.000€," → `text-[24px] md:text-4xl`
   - "nu valoarea unui client este problema." and "problema este câți pleacă la concurență" → keep `text-xl md:text-4xl`
   - "… în fiecare lună." → `text-[22px] md:text-4xl`

This requires restructuring the single `<p>` tag into multiple elements or using `<span>` wrappers with different size classes for mobile.


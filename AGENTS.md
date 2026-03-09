# Swift Mumbai gotchas

- The public site is a single-page app. `src/pages/Index.tsx` stacks the homepage sections in order, so changing section order, adding a section, or removing one always means editing `Index.tsx` as well as the section component itself.
- Routing is intentionally tiny. `src/App.tsx` only wires `/` plus the catch-all `*` route; any new route must be inserted above the catch-all route or it will never match.
- Most visible content is hardcoded in component-local arrays, not pulled from a CMS or API. Update the arrays in `src/components/About.tsx`, `Contact.tsx`, `Events.tsx`, `Instagram.tsx`, `Navbar.tsx`, `Sponsors.tsx`, `Stats.tsx`, and `Team.tsx` instead of looking for a shared data layer.
- Images are imported directly from `src/assets/...` inside each section component. If content changes need new media, the asset has to exist first and then be imported as a module before it can be rendered.
- Navigation is a mix of in-page anchors and external links. `Navbar.tsx` sends "About" and "Contact Us" to section IDs, but "Events" goes straight to Luma in a new tab.
- Dark mode is manual, not provider-driven. `src/components/ThemeToggle.tsx` reads and writes the `"theme"` key in `localStorage` and toggles the `dark` class on `document.documentElement`.
- The styling system depends on custom CSS utilities in `src/index.css`, not just raw Tailwind classes. The liquid-glass, gradient text, spacing, and animation helpers live there and are reused across the site.
- Tailwind class merging should go through `cn()` from `src/lib/utils.ts` when classes need to be combined conditionally.
- Motion is part of the design, not decoration. Most sections use Framer Motion plus `useInView`, so visual changes often need matching entrance-animation updates to stay consistent with the rest of the page.
- The Instagram strip is not a generic gallery; it is an Embla carousel with its own scroll state in `src/components/Instagram.tsx`. Changing slide behavior usually means updating both the `posts` array and the carousel state logic.
- The repo has working `test` and `build` scripts, but `npm run lint` currently fails because of pre-existing issues in generated/shared UI files and `tailwind.config.ts`. Don’t assume a lint failure came from your change unless you touched those files.

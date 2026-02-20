# Preferred Tech Stack & Implementation Rules

When generating code or UI components for this brand, you **MUST** strictly adhere to the following technology choices.

> [!IMPORTANT]
> Replace all `[INSERT ...]` placeholders with actual technology choices for your project.

---

## Core Stack

* **Framework:** [INSERT FRAMEWORK - e.g., React, Vue, Next.js, Nuxt]
* **Language:** [INSERT LANGUAGE - e.g., TypeScript, JavaScript]
* **Styling Engine:** [INSERT STYLING - e.g., Tailwind CSS, Styled Components, CSS Modules]
* **Component Library:** [INSERT LIBRARY - e.g., shadcn/ui, Material UI, Chakra UI, or "None - custom components"]
* **Icons:** [INSERT ICON LIBRARY - e.g., Lucide React, Heroicons, Font Awesome]
* **State Management:** [INSERT STATE - e.g., React Context, Zustand, Redux, Pinia]
* **Routing:** [INSERT ROUTING - e.g., React Router, Next.js App Router, Vue Router]

---

## Implementation Guidelines

### 1. Styling Rules

**[INSERT STYLING ENGINE] Usage:**

[INSERT SPECIFIC INSTRUCTIONS]

**Example for Tailwind CSS:**
* Use utility classes directly in JSX/templates
* Utilize the color tokens defined in `design-tokens.json` (e.g., use `bg-primary text-primary-foreground` instead of hardcoded hex values)
* **Dark Mode:** Support dark mode using Tailwind's `dark:` variant modifier
* **Responsive Design:** Use Tailwind breakpoints (`sm:`, `md:`, `lg:`, etc.) as defined in design-tokens.json

**Example for CSS Modules:**
* Create `.module.css` files alongside components
* Import styles as `styles` object
* Use CSS variables from design-tokens.json
* Follow BEM naming convention

### 2. Component Patterns

**[INSERT COMPONENT LIBRARY] Patterns:**

[INSERT SPECIFIC PATTERNS]

**Example patterns:**

**Buttons:**
* Primary actions must use the solid Primary color from design tokens
* Secondary actions should use 'Ghost' or 'Outline' variants
* Destructive actions use the destructive color token
* All buttons must have hover and active states defined

**Forms:**
* Labels must always be placed *above* input fields
* Use consistent spacing between form items (reference spacing_base_unit)
* Required fields must be clearly marked with an asterisk (*)
* Error messages appear below the input in destructive color
* Success states use success color token

**Layout:**
* Use [INSERT LAYOUT METHOD - e.g., Flexbox/Grid via Tailwind, CSS Grid, Flex]
* Container max-widths should match breakpoints from design-tokens.json
* Maintain consistent padding/margin using spacing_base_unit multiples

**Typography:**
* Headings use font_family_headings from design tokens
* Body text uses font_family_body from design tokens
* Maintain line-height as defined in design tokens
* Use semantic HTML tags (h1-h6, p, etc.)

### 3. Code Organization

**File Structure:**
```
[INSERT YOUR FILE STRUCTURE]
```

**Example:**
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── lib/              # Utilities and helpers
├── styles/           # Global styles and theme
└── hooks/            # Custom hooks (if React)
```

**Naming Conventions:**
* [INSERT NAMING RULES - e.g., PascalCase for components, camelCase for functions]
* [INSERT FILE NAMING - e.g., ComponentName.tsx, component-name.tsx]

### 4. Accessibility Requirements

* All interactive elements must be keyboard accessible
* Use semantic HTML elements
* Include ARIA labels where necessary
* Maintain color contrast ratios (WCAG AA minimum)
* Support screen reader navigation
* [INSERT ADDITIONAL A11Y RULES]

### 5. Performance Rules

* [INSERT PERFORMANCE GUIDELINES]

**Examples:**
* Lazy load images and components where appropriate
* Minimize bundle size by importing only needed components
* Use code splitting for routes
* Optimize images (WebP format, responsive sizes)
* Avoid unnecessary re-renders (React.memo, useMemo where needed)

---

## Forbidden Patterns

> [!CAUTION]
> The following patterns are strictly prohibited:

* ❌ Do NOT use [INSERT FORBIDDEN TECH - e.g., jQuery, Bootstrap]
* ❌ Do NOT hardcode colors - always reference design-tokens.json
* ❌ Do NOT create inline styles except for dynamic values
* ❌ Do NOT use [INSERT FORBIDDEN PATTERN]
* ❌ Do NOT bypass the component library - extend, don't replace
* ❌ Do NOT mix styling approaches (pick one and stick to it)
* ❌ Do NOT ignore TypeScript types (if using TypeScript)

[INSERT ADDITIONAL FORBIDDEN PATTERNS]

---

## Approved Libraries

**Additional libraries that can be used:**

| Category | Approved Library | Purpose |
|----------|-----------------|---------|
| [INSERT CATEGORY] | [INSERT LIBRARY] | [INSERT PURPOSE] |
| Date Handling | [e.g., date-fns] | [e.g., Date manipulation] |
| Forms | [e.g., React Hook Form] | [e.g., Form state management] |
| Validation | [e.g., Zod] | [e.g., Schema validation] |
| HTTP Client | [e.g., Axios] | [e.g., API requests] |
| Animation | [e.g., Framer Motion] | [e.g., UI animations] |

**Before adding new libraries:**
1. Check if existing approved library can solve the problem
2. Evaluate bundle size impact
3. Verify maintenance status and community support
4. Get approval before adding to project

---

## Code Quality Standards

**Linting & Formatting:**
* [INSERT LINTER - e.g., ESLint with recommended config]
* [INSERT FORMATTER - e.g., Prettier with specific rules]
* [INSERT PRE-COMMIT HOOKS - e.g., Husky + lint-staged]

**Testing:**
* [INSERT TESTING FRAMEWORK - e.g., Vitest, Jest, Cypress]
* [INSERT COVERAGE REQUIREMENT - e.g., Minimum 80% coverage for utilities]
* [INSERT TEST PATTERNS - e.g., Test user behavior, not implementation]

**Documentation:**
* All components must have JSDoc comments
* Complex utilities require usage examples
* README files for each major module
* [INSERT ADDITIONAL DOC REQUIREMENTS]

---

## Version Control Rules

* [INSERT BRANCHING STRATEGY - e.g., Git Flow, Trunk-based]
* [INSERT COMMIT CONVENTION - e.g., Conventional Commits]
* [INSERT PR REQUIREMENTS - e.g., Must pass CI, require review]

---

## Notes for AI Agents

When generating code:
1. **Always** reference this file before making technology decisions
2. **Never** introduce technologies not listed in approved libraries
3. **Default** to the patterns and conventions defined here
4. **Ask** if a requirement conflicts with these guidelines
5. **Update** this file when new patterns are approved (with user consent)

---

## Customization Instructions

**To populate this template:**
1. Replace all `[INSERT ...]` placeholders with actual values
2. Remove example sections that don't apply
3. Add project-specific rules and patterns
4. Keep this file updated as stack evolves
5. Delete this customization section when complete

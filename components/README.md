# Components

This folder contains **global reusable components**, including the design system generated from **shadcn/ui**.

## Structure
- `ui/` → Shadcn UI components (generated via CLI).
- `Button.tsx` → Example of a custom global button.
- `Navbar.tsx` → Global navigation bar.
- `Modal.tsx` → Global modal component.

## Guidelines
- ✅ Use `components/ui/` for design-system components generated from **shadcn/ui**.
- ✅ Add global components that are reused across features here.
- ❌ Do not add **feature-specific components** here (put them inside `features/<feature>/components/`).

## Example Usage
```tsx
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

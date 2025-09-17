# 📌 Pull Request Title Guidelines

Consistent PR titles improve readability, automation, and changelog generation.  
We follow a **Conventional Commits + human-readable** hybrid style.

---

## ✅ Format
<type>(<scope>): <short description>

- **type** → kind of change (see list below)
- **scope** → optional, area of code affected (e.g. dashboard, config, theme)
- **short description** → what the PR does (use imperative tone, no punctuation at the end)

---

## 🔄 Allowed Types

- `feat` → new feature (e.g. `feat(dashboard): add initial dashboard page`)
- `fix` → bug fix (e.g. `fix(config): allow Googleusercontent remote images`)
- `docs` → documentation updates (e.g. `docs(readme): add directory documentation`)
- `refactor` → code refactor (e.g. `refactor(theme): migrate to OKLCH colors`)
- `style` → formatting changes (no logic changes)
- `test` → test-related changes
- `chore` → build process, tooling, CI/CD, dependencies

---

## 📝 Examples

- `feat(dashboard): add initial dashboard page`
- `fix(auth): prevent login crash on invalid token`
- `docs(readme): add setup instructions`
- `refactor(theme): migrate to CSS-based OKLCH colors`
- `chore(deps): update Next.js to v15`

---

## ❌ Avoid

- Too vague: `update stuff`, `fix bug`
- Too long: `feat: added a new dashboard page with multiple cards and widgets for user management`
- Ending with punctuation: `fix: broken button.`

---

## 🔗 Linking Issues

If related to an issue, reference it in the PR description (not in the title):

Example:

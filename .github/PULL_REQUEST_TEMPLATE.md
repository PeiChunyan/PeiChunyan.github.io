## Summary / 摘要

Describe the purpose of this pull request and what it changes.

## Checklist / 清单

- [ ] Built preview artifact exists (Actions artifact: preview-site)
- [ ] CI checks pass (Preview MkDocs build on PR)
- [ ] At least 1 approving review is present
- [ ] No unrelated files changed

## How to review / 如何复查

1. Open the 
   - Actions → latest "Preview MkDocs build" run → Artifacts → preview-site
   - Download and inspect site/ locally (open index.html) to preview content
2. Check the changed Markdown files under docs/
3. Verify styling or JS changes if any

## After merge / 合并后

Merging to master will trigger the deploy workflow which publishes the site to GitHub Pages.

---

请在合并前确认 Preview artifacts 可用并且 CI 通过。合并到 master 后会自动部署到 GitHub Pages。
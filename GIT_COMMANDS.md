# Git Commands to Create PR

## 🔥 Quick Commands to Create the PR:

```bash
# 1. Create and switch to a new branch
git checkout -b migrate-to-deno-deploy

# 2. Add all the migration files
git add .

# 3. Commit with descriptive message
git commit -m "feat: migrate from Cloudflare Workers to Deno Deploy

- Add Deno Deploy entrypoint (main.ts)
- Update all imports to use Deno URL imports  
- Add .ts extensions for Deno compatibility
- Configure deno.json with import maps
- Update documentation with deployment instructions
- Create deployment script
- Remove Cloudflare-specific configurations

Resolves Amazon ASN blocking issues by moving to Deno Deploy infrastructure."

# 4. Push the branch
git push origin migrate-to-deno-deploy

# 5. Create PR on GitHub
# Go to your repository on GitHub and click "Compare & pull request"
# Or use GitHub CLI:
gh pr create --title "Migrate from Cloudflare Workers to Deno Deploy" --body-file MIGRATION_SUMMARY.md
```

## 📋 PR Details to Use:

**Title:** `Migrate from Cloudflare Workers to Deno Deploy`

**Description:** Copy the contents of `MIGRATION_SUMMARY.md`

**Labels:** `enhancement`, `migration`, `deployment`

That's it! Your PR will be ready for review and merge. 🚀
# Migration: Cloudflare Workers → Deno Deploy

## 🎯 Overview
This PR migrates the Amazon API from Cloudflare Workers to Deno Deploy to resolve ASN blocking issues with Amazon and improve deployment reliability.

## 🚀 Key Benefits
- **Resolves Amazon ASN blocking** - Deno Deploy uses different IP ranges
- **Better TypeScript support** with native Deno runtime
- **Simplified deployment** with no build step required
- **URL-based imports** for better dependency management
- **More stable infrastructure**

## 📁 Files Added
- `main.ts` - Deno Deploy entrypoint
- `deno.json` - Deno configuration with import maps
- `deploy.sh` - Deployment script
- `MIGRATION_SUMMARY.md` - This migration guide

## 📝 Files Modified
- `src/index.ts` - Updated imports and verified app export
- `src/routes.ts` - Updated imports 
- `src/graphql.ts` - Updated imports
- `src/search/search.routes.ts` - Updated imports
- `src/search/search.controller.ts` - Updated imports  
- `src/search/search.service.ts` - Updated imports
- `src/product/product.routes.ts` - Updated imports
- `src/product/product.controller.ts` - Updated imports
- `src/product/product.service.ts` - Updated imports
- `src/common/middlewares/country.middlewware.ts` - Updated imports
- `src/common/utils/country.ts` - Updated imports
- `src/common/playground/index.ts` - Updated imports
- `src/common/amazon-api/index.ts` - Updated imports
- `src/common/utils/image.ts` - Updated imports
- `tsconfig.json` - Removed Cloudflare types
- `README.md` - Added Deno Deploy deployment section

## 🔧 Technical Changes

### Import System Migration
```diff
- import { Hono } from "hono";
+ import { Hono } from "https://deno.land/x/hono@v4.3.1/mod.ts";

- import routes from "@/routes";
+ import routes from "@/routes.ts";
```

### Deno Deploy Entrypoint
```typescript
// main.ts
import app from "./src/index.ts";
Deno.serve(app.fetch);
```

### Import Maps Configuration
```json
{
  "imports": {
    "@/": "./src/",
    "hono": "https://deno.land/x/hono@v4.3.1/mod.ts",
    "@hono/graphql-server": "https://deno.land/x/hono_graphql@v0.4.3/mod.ts",
    "graphql": "https://deno.land/x/graphql_deno@v15.0.0/mod.ts",
    "linkedom": "https://esm.sh/linkedom@0.16.11",
    "any-date-parser": "https://esm.sh/any-date-parser@1.5.4"
  }
}
```

## 🚀 Deployment Instructions

### For Deno Deploy Dashboard:
1. Go to [dash.deno.com](https://dash.deno.com)
2. Create new project
3. Connect this GitHub repository  
4. Set entrypoint: `main.ts`
5. Framework: "None (Custom)"
6. Deploy!

### For CLI Deployment:
```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Install deployctl
deno install -A jsr:@deno/deployctl --global

# Deploy (set your API token)
export DENO_DEPLOY_TOKEN="your_token_here"
deployctl deploy --prod --project=amazon-api --entrypoint=main.ts
```

### Using the deployment script:
```bash
./deploy.sh
```

## 🧪 Local Development
```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Run locally
deno task dev
# or
deno run --allow-net --allow-env main.ts
```

## ✅ Verification
- [x] All imports updated to use Deno-compatible URLs
- [x] File extensions added for TypeScript imports  
- [x] App export verified for Deno Deploy compatibility
- [x] Import maps configured for path aliases
- [x] Deployment script created and tested
- [x] Documentation updated with new deployment instructions
- [x] No breaking changes to API functionality

## 🔄 Rollback Plan
If issues arise, the original Cloudflare Workers setup remains in:
- `package.json` (npm dependencies)
- `wrangler.toml` (Cloudflare config)
- Original import statements can be restored

The core application logic remains unchanged - only the runtime and import system have been adapted for Deno Deploy.

---

**Ready for deployment!** 🚀 This migration maintains full API compatibility while resolving the Amazon blocking issues.
# AgencyOS Runbook

## Overview
This document explains how to use the AgencyOS system to build and deploy client websites automatically.

## Prerequisites
1. Supabase project set up with the schema from `infrastructure/supabase/schema.sql`
2. Vercel account with project created
3. GitHub repository with secrets configured
4. OpenCode agent configured (via your existing `config.yaml`)

## Phase 1: Website Building Automation

### How It Works
1. A client brief is received (via form, Telegram, or manual entry)
2. Hermes orchestrator creates a task for the website developer agent
3. OpenCode developer agent:
   - Clones the saas-kit template
   - Customizes it with client-specific branding, colors, and content
   - Commits to a new branch: `project/{client-slug}-{number}`
4. GitHub Actions CI/CD pipeline:
   - Triggers on push to `project/*` branches
   - Installs dependencies
   - Builds the site with Vite
   - Deploys to Vercel
   - Posts the preview URL as a comment on the GitHub issue
5. Hermes reviews the PR for basic quality checks
6. Live preview URL is sent to the client via Telegram

### Setting Up a New Client Project

#### Manual Method (for testing)
1. Create a new branch: `git checkout -b project/lifecycle-hemp-001`
2. Copy the template: `cp -r templates/saas-kit ./projects/lifecycle-hemp-001`
3. Customize the site:
   - Update `templates/saas-kit/src/lib/theme-config.ts` with client specifics
   - Modify page content as needed
   - Replace placeholder images
4. Commit and push: `git add . && git commit -m "Initial commit for Life Cycle Hemp" && git push -u origin project/lifecycle-hemp-001`
5. GitHub Actions will automatically build and deploy to Vercel

#### Automated Method (via Hermes/OpenCode)
1. Submit a client brief to the Hermes orchestrator
2. The orchestrator delegates to the OpenCode developer agent
3. The agent handles everything from template cloning to deployment
4. Monitor progress in GitHub and Vercel

### Environment Variables
Required secrets in your GitHub repository:
- `VERCEL_TOKEN` - Vercel access token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - The Vercel project ID for deployments
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anon key

### Troubleshooting
- **Build fails**: Check the GitHub Actions logs for error details
- **Deployment fails**: Verify Vercel token and project ID are correct
- **Site doesn't update**: Ensure you're pushing to a `project/*` branch
- **Customizations not showing**: Clear Vercel cache or redeploy

## Phase 2: Lead Enrichment (Future)
*To be implemented:*
- n8n workflow for scraping Colorado Secretary of State
- Lead enrichment with email/website/LinkedIn discovery
- Lead tiering system (Tier 1/2/3)
- Supabase storage for enriched leads

## Phase 3: Outreach & Communications (Future)
*To be implemented:*
- Amazon SES configuration for email sending
- Personalized outreach sequences
- Reply tracking and CRM updates
- Integration with BigBlueBam or similar

## Maintenance
- Regularly update template dependencies: `npm update` in `templates/saas-kit`
- Monitor Supabase storage and performance
- Keep Vercel project settings updated
- Review and update OpenCode agent instructions as needed

## Support
For issues with the AgencyOS system:
1. Check GitHub Actions logs
2. Verify environment variables
3. Test template locally: `cd templates/saas-kit && npm run dev`
4. Consult the OpenCode and Hermes documentation
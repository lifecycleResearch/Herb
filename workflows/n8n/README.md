# n8n Workflows (Phase 2)

This directory will contain n8n workflows for lead enrichment and outreach sequences.

## Planned Workflows

### lead-enrichment.json
- Scrape Colorado Secretary of State for business registrations
- Enrich leads with website, email, LinkedIn, and Google My Business data
- Tier leads based on website complexity and business type
- Store enriched data in Supabase leads table

### outreach-sequence.json
- Send personalized email sequences to leads
- Track opens, clicks, and replies
- Update CRM with interaction data
- Trigger website build requests for interested leads

## Setup Instructions (for Phase 2)

1. Create a free account at [n8n.io](https://n8n.io)
2. Import the workflow JSON files when they become available
3. Configure required credentials:
   - Supabase (for data storage)
   - Brave Search or Google Custom Search (for web enrichment)
   - Hunter.io or Apollo.io (for email discovery)
   - LinkedIn (via scraping or API)
   - Google My Business API
4. Activate workflows and monitor execution

## Environment Variables Needed
- `N8N_HOST` - n8n instance URL
- `ENCRYPTION_KEY` - For n8n encryption
- Database credentials if using external DB
- API keys for enrichment services
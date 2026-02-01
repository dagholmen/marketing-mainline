# B2BEnrich API Examples

This document provides example requests for all public API endpoints.

## Base URL
```
https://api.b2benrich.com
```

## Authentication
All requests require an API key in the `X-Api-Key` header:
```
X-Api-Key: your_api_key_here
```

---

## Prospector Search

### POST /v1/prospector/search
**Cost:** 5 credits per request

**Description:** Search the prospector database with user-friendly predefined filters.

**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/search \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "org_company_name": "Google",
    "per_job_title": "Software Engineer",
    "org_headquarters_city": "San Francisco",
    "page": 1,
    "include_total": true
  }'
```

---

## Organization Enrichment

### POST /v1/enrich/cached/org/linkedin-to-org
**Cost:** 1 credit per request

**Description:** Enrich organization data from a LinkedIn company URL.

**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/enrich/cached/org/linkedin-to-org \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "input": "https://www.linkedin.com/company/google"
  }'
```

### POST /v1/enrich/cached/org/domain-to-org
**Cost:** 1 credit per request

**Description:** Enrich organization data from a company domain.

**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/enrich/cached/org/domain-to-org \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "input": "google.com"
  }'
```

---

## Person Enrichment

### POST /v1/enrich/cached/person/linkedin-to-person
**Cost:** 1 credit per request

**Description:** Enrich person data from a LinkedIn profile URL.

**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/enrich/cached/person/linkedin-to-person \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "input": "https://www.linkedin.com/in/satyanadella"
  }'
```

### POST /v1/enrich/cached/person/phone-to-linkedin
**Cost:** 1 credit per request

**Description:** Get LinkedIn profile URLs from a phone number.

**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/enrich/cached/person/phone-to-linkedin \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "input": "+1-555-123-4567"
  }'
```

### POST /v1/enrich/cached/person/email-to-linkedin
**Cost:** 1 credit per request

**Description:** Get LinkedIn profile URLs from an email address.

**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/enrich/cached/person/email-to-linkedin \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "input": "john.doe@gmail.com"
  }'
```

---

## Meta List Endpoints

All meta endpoints are **free (0 credits)** and return paginated lists of distinct values for filtering.

### POST /v1/prospector/meta/industries
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/industries \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "software",
    "page": 1
  }'
```

### POST /v1/prospector/meta/job-functions
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/job-functions \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "",
    "page": 1
  }'
```

### POST /v1/prospector/meta/job-levels
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/job-levels \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1
  }'
```

### POST /v1/prospector/meta/job-titles
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/job-titles \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "engineer",
    "page": 1
  }'
```

### POST /v1/prospector/meta/countries
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/countries \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1
  }'
```

### POST /v1/prospector/meta/regions
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/regions \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1
  }'
```

### POST /v1/prospector/meta/sub-regions
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/sub-regions \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "California",
    "page": 1
  }'
```

### POST /v1/prospector/meta/locations
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/locations \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "San Francisco",
    "page": 1
  }'
```

### POST /v1/prospector/meta/companies
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/companies \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "Google",
    "page": 1
  }'
```

### POST /v1/prospector/meta/g2-categories
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/g2-categories \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1
  }'
```

### POST /v1/prospector/meta/crunchbase-categories
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/crunchbase-categories \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1
  }'
```

### POST /v1/prospector/meta/revenue-ranges
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/revenue-ranges \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1
  }'
```

### POST /v1/prospector/meta/employee-count-ranges
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/employee-count-ranges \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1
  }'
```

### POST /v1/prospector/meta/company-entity-types
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/company-entity-types \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1
  }'
```

### POST /v1/prospector/meta/company-legal-types
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/company-legal-types \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1
  }'
```

### POST /v1/prospector/meta/technographics/crm
**Example Request:**
```bash
curl -X POST https://api.b2benrich.com/v1/prospector/meta/technographics/crm \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "Salesforce",
    "page": 1
  }'
```

---

## Notes

- All meta endpoints follow the same pattern with optional `search` and required `page` parameters
- The prospector search endpoint supports many more filters - see the OpenAPI documentation for the complete list
- Page numbers are 1-indexed
- Meta endpoints return 100 values per page
- Search endpoints return 25 records per page

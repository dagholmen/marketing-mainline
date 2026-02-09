# Welcome to B2BEnrich

# B2BEnrich API Documentation

Welcome to the B2BEnrich API – a comprehensive B2B data enrichment platform that helps you transform partial contact and company information into rich, actionable business intelligence.

## What is B2BEnrich?

B2BEnrich provides real-time data enrichment APIs that allow you to:

- **Enrich person profiles** with comprehensive professional data including job history, education, skills, and contact information
- **Enrich company data** with firmographic details, industry classifications, employee counts, revenue data, and more
- **Resolve identities** across multiple data points (email, phone, LinkedIn URL, domain)
- **Access cached data** for fast, cost-effective lookups

## Key Features

### 🎯 Multi-Source Enrichment

Access enriched data from multiple sources through simple API calls:

- **LinkedIn Profile → Person Data**: Get complete professional profiles
- **Email → LinkedIn Profile**: Resolve email addresses to LinkedIn profiles
- **Phone → LinkedIn Profile**: Find LinkedIn profiles from phone numbers
- **Company Domain → Organization Data**: Enrich company information
- **LinkedIn Company → Organization Data**: Get detailed firmographics

### ⚡ High Performance

- **Cached responses** for instant lookups
- **RESTful JSON API** for easy integration
- **Reliable infrastructure** with 99.9% uptime

### 🔒 Secure & Compliant

- **API key authentication** for secure access
- **Data privacy** controls
- **HTTPS encryption** for all requests

## Use Cases

B2BEnrich is perfect for:

- **Sales & Marketing**: Enrich leads with complete contact and company information
- **Customer Success**: Better understand your customers with rich profile data
- **Recruiting**: Find and verify candidate information
- **Market Research**: Gather firmographic and demographic insights
- **Data Quality**: Clean and enhance existing databases

## API Overview

The B2BEnrich API is organized around REST principles. All requests and responses use JSON format. The API accepts POST requests with a simple `input` field containing the data you want to enrich.

### Base URL

```
https://api.b2benrich.com
```

### Available Endpoints

#### Person Enrichment

- `POST /v1/enrich/cached/person/linkedin-to-person` – Enrich person data from LinkedIn URL
- `POST /v1/enrich/cached/person/email-to-linkedin` – Find LinkedIn profile from email
- `POST /v1/enrich/cached/person/phone-to-linkedin` – Find LinkedIn profile from phone

#### Organization Enrichment

- `POST /v1/enrich/cached/org/linkedin-to-org` – Enrich company data from LinkedIn URL
- `POST /v1/enrich/cached/org/domain-to-org` – Enrich company data from domain

## Quick Start

Get started in minutes:

1. **Get your API key** – Contact us to receive your authentication credentials
2. **Make your first request** – Try a simple enrichment call
3. **Integrate** – Add B2BEnrich to your application

### Example Request

```bash
curl -X POST https://api.b2benrich.com/v1/enrich/cached/person/linkedin-to-person \
  -H "X-Api-Key: your_api_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "input": "https://www.linkedin.com/in/example"
  }'
```

### Example Response

```json
{
  "status": "success",
  "person_id": "per_abc123",
  "data": {
    "full_name": "John Doe",
    "first_name": "John",
    "last_name": "Doe",
    "linkedin_url": "https://www.linkedin.com/in/example",
    "job_title": "Senior Product Manager",
    "job_org_linkedin_url": "https://www.linkedin.com/company/example",
    "linkedin_headline": "Product Leader | Tech Enthusiast",
    "city": "San Francisco",
    "state_name": "California",
    "country_name": "United States"
  }
}
```

## What's Next?

- **[Authentication](/authentication)** – Learn how to authenticate your requests
- **[API Reference](/api)** – Explore all available endpoints and parameters
- **[Error Handling](#error-responses)** – Understand API responses and error codes

## Need Help?

- **Technical Support**: support@b2benrich.com
- **Sales Inquiries**: sales@b2benrich.com
- **Status Updates**: Check our status page for real-time system health

## Rate Limits & Credits

The B2BEnrich API uses a credit-based system:

- Each enrichment request consumes credits based on the endpoint and data returned
- Rate limits apply to prevent abuse and ensure fair usage
- Contact us for custom rate limits for high-volume use cases

---

Ready to get started? Head over to our [Authentication guide](/authentication) to begin making API calls.

---
title: Redacting sensitive data
weight: 2
---

Redaction runs before synchronous, after-response, or queued persistence.
Sensitive values are therefore removed before a queue payload leaves the
application process.

Object-backed DTOs, models, and collections are normalized to arrays before
key and path rules run, so an object boundary cannot bypass redaction.

## Sensitive keys

Matching is recursive and case insensitive. Defaults include authorization
headers, API keys, access and refresh tokens, passwords, cookies, client
secrets, and private keys.

Add application-specific keys in the published configuration:

```php
'redaction' => [
    'replacement' => '[REDACTED]',
    'keys' => [
        'authorization',
        'api_key',
        'password',
        'customer_secret',
    ],
    'paths' => [],
],
```

Replacing the `keys` array replaces the published defaults, so retain every
default your application still needs.

## Dot paths

Paths can target a specific location and use `*` for one wildcard segment:

```php
'paths' => [
    'request.headers.authorization',
    'request.tools.*.arguments.password',
    'response.customer.email',
    'tags.internal_reference',
],
```

Valid payload roots include `request`, `response`, `metadata`, `tags`, `error`,
and `event`.

## Redaction at rest

Trace metadata, context tags, span requests and responses, event payloads, and
error fields all pass through the redaction pipeline before database
persistence.

Test your rules with realistic nested payloads before enabling production
recording.

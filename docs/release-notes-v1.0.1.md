---
title: AI Observatory 1.0.1 release notes
navigation: false
---

AI Observatory 1.0.1 is a backward-compatible reliability, privacy, and
performance release.

Payloads are now normalized before redaction so sensitive fields on DTOs,
models, collections, metadata, context tags, and error data are masked before
database persistence. Invalid UTF-8 is safely substituted instead of causing a
span to disappear, and long provider errors fit the configured payload limit.

Token accounting now distinguishes uncached input, cache reads, and cache
writes according to each provider's reported semantics. Cache-write pricing
and input-only operations such as embeddings are supported without treating
unknown prices as zero.

Deferred and queued recording preserve redacted user, tenant, feature, and tag
context. Queue batches are compressed, retried, bounded, and use deferred local
persistence when a compressed payload exceeds the configured queue threshold.
Sampling promotion buffers and dashboard detail queries are also bounded.

The SDK compatibility layer now includes every source-verified file and
vector-store event exposed by Laravel AI SDK 0.10.1. Listener dispatch is
restricted to Laravel AI events and resolves services from the active
application scope for long-running workers.

The dashboard preserves filters and pagination through browser navigation,
renders collapsed JSON lazily, handles unexpected rendering errors, and
supports applications hosted below a URL subdirectory.

Existing applications should run:

```bash
composer update kanary/laravel-ai-observatory
php artisan ai-observatory:install
php artisan migrate
php artisan ai-observatory:status
```

The new compatibility migration is idempotent and keeps restrictive foreign
keys. See the [upgrade guide](upgrading.md) for configuration guidance.

Laravel AI SDK compatibility remains source verified and contract tested
against version 0.10.1.

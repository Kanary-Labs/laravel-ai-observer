---
title: About AI Observatory
weight: 8
---

AI Observatory is an independent open-source package maintained by
[Kanary Labs](https://kanarylabs.com). It provides local observability for the
official Laravel AI SDK.

The package is inspired by the quality of Laravel's local developer tools, but
it does not depend on Laravel Telescope internals and does not copy Telescope
source code, assets, or branding.

## Documentation acknowledgment

Documentation inspired by [Spatie](https://spatie.be/docs).

## Design principles

- Observe official Laravel AI SDK events instead of replacing the SDK API.
- Never let recorder failures interrupt the host application's AI response.
- Normalize SDK events behind version-specific adapters before persistence.
- Redact and limit payloads before deferred or queued storage.
- Keep traces useful across synchronous, deferred, queued, and streaming work.
- Make unsupported SDK versions and unavailable data explicit.

## What AI Observatory does not do

AI Observatory is not a prompt CMS, evaluation platform, billing engine,
hosted ingestion service, or replacement agent framework. It does not capture
hidden model reasoning or chain of thought. It records only provider-visible
data legitimately exposed by the SDK and enabled by the application.

The package is released under the [MIT license](../LICENSE.md).

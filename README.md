# AI Observatory

AI Observatory is an independent, open-source observability and debugging
package for applications using the official Laravel AI SDK.

> AI prompts and responses can contain sensitive information. Review capture
> and redaction settings before enabling this package in production.

The package is under active development and is not ready for production use.

## Requirements

- PHP 8.3 or newer
- Laravel 12 or 13
- `laravel/ai` 0.10.x
- MySQL 8+, PostgreSQL 14+, or SQLite

## SDK compatibility

| Laravel AI SDK | Status | Adapter |
| --- | --- | --- |
| 0.10.1 | Source verified; implementation in progress | `LaravelAiSdkV010Adapter` |

See the [verified SDK event inventory](docs/sdk-events-v0.10.1.md).

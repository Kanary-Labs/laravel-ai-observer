# Security policy

AI Observatory stores data that may contain prompts, responses, credentials,
personal information, and internal business context. Review capture and
redaction settings before enabling it in production.

## Supported versions

Security fixes are provided for the latest tagged preview release. Until
`1.0.0`, upgrading to the latest `0.x` release may be required to receive a fix.

## Reporting a vulnerability

Use GitHub's private security advisory reporting for this repository. Do not
open a public issue containing an exploit, secret, prompt, response, or customer
data. Include the affected version, reproduction steps, impact, and any
suggested remediation.

If private reporting is unavailable, open a public issue containing no
sensitive details and ask the maintainers for a private contact channel.

## Operational guidance

- Keep the dashboard unavailable in production unless explicitly authorized.
- Use a dedicated database connection when operational isolation is required.
- Keep prompts, responses, tool data, and stack traces disabled unless needed.
- Configure application-specific redaction paths.
- Use retention and pruning appropriate to the data classification.
- Treat exported traces and screenshots as sensitive.

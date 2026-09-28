<?php

namespace Kanary\AiObservatory\Support;

use Composer\InstalledVersions;

final readonly class AiSdkCompatibility
{
    public function __construct(public ?string $version) {}

    public static function current(): self
    {
        return new self(
            InstalledVersions::isInstalled('laravel/ai')
                ? InstalledVersions::getPrettyVersion('laravel/ai')
                : null,
        );
    }

    public function isSupported(): bool
    {
        return $this->version !== null
            && preg_match('/^v?(0\.10\.|1\.)/', $this->version) === 1;
    }

    public function status(): string
    {
        if ($this->version === null) {
            return 'not_installed';
        }

        if (! $this->isSupported()) {
            return 'unsupported';
        }

        return in_array(ltrim($this->version ?? '', 'v'), ['0.10.1', '0.10.2', '0.10.3', '1.0.0'], true)
            ? 'tested'
            : 'untested';
    }

    public function adapter(): ?string
    {
        return $this->isSupported()
            ? (str_starts_with(ltrim($this->version ?? '', 'v'), '1.')
                ? 'Laravel AI SDK v1 adapter set'
                : 'Laravel AI SDK v0.10 adapter set')
            : null;
    }
}

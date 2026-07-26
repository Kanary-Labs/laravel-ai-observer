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
            && preg_match('/^v?0\.10\./', $this->version) === 1;
    }

    public function status(): string
    {
        if ($this->version === null) {
            return 'not_installed';
        }

        return $this->isSupported() ? 'tested' : 'unsupported';
    }

    public function adapter(): ?string
    {
        return $this->isSupported() ? 'LaravelAiSdkV010Adapter' : null;
    }
}

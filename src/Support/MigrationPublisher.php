<?php

namespace Kanary\AiObservatory\Support;

use Carbon\CarbonImmutable;

final class MigrationPublisher
{
    /** @var list<string> */
    private const MIGRATIONS = [
        'create_ai_observatory_traces_table',
        'create_ai_observatory_spans_table',
        'create_ai_observatory_events_table',
    ];

    /**
     * @return array<string, string>
     */
    public function paths(string $sourceDirectory, string $destinationDirectory): array
    {
        $publishedAt = CarbonImmutable::now();
        $paths = [];

        foreach (self::MIGRATIONS as $sequence => $migration) {
            $source = "{$sourceDirectory}/{$migration}.php.stub";
            $destination = $this->existingMigration(
                $destinationDirectory,
                $migration,
            ) ?? sprintf(
                '%s/%s_%s.php',
                $destinationDirectory,
                $publishedAt->addSeconds($sequence)->format('Y_m_d_His'),
                $migration,
            );

            $paths[$source] = $destination;
        }

        return $paths;
    }

    private function existingMigration(string $directory, string $migration): ?string
    {
        $matches = glob("{$directory}/*_{$migration}.php");

        if ($matches === false || $matches === []) {
            return null;
        }

        sort($matches);

        return $matches[0];
    }
}

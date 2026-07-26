<?php

namespace Kanary\AiObservatory\Contracts;

interface TraceQueryRepository
{
    /**
     * @param  array<string, mixed>  $filters
     * @return array{
     *     data: list<array<string, mixed>>,
     *     meta: array<string, mixed>
     * }
     */
    public function paginate(array $filters): array;

    /** @return array<string, mixed>|null */
    public function find(string $traceId): ?array;
}

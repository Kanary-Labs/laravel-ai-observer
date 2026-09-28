<?php

namespace Kanary\AiObservatory\Adapters;

use DateInterval;
use Kanary\AiObservatory\Adapters\Concerns\MapsLaravelAiData;
use Kanary\AiObservatory\Data\SpanFinished;
use Kanary\AiObservatory\Data\SpanStarted;
use Kanary\AiObservatory\Data\TraceFinished;
use Kanary\AiObservatory\Data\TraceStarted;
use Kanary\AiObservatory\Enums\SpanStatus;
use Kanary\AiObservatory\Enums\SpanType;
use Kanary\AiObservatory\Enums\TraceStatus;
use Laravel\Ai\Contracts\Files\StorableFile;
use Laravel\Ai\Events\AddingFileToStore;
use Laravel\Ai\Events\CreatingStore;
use Laravel\Ai\Events\FileAddedToStore;
use Laravel\Ai\Events\FileDeleted;
use Laravel\Ai\Events\FileRemovedFromStore;
use Laravel\Ai\Events\FileStored;
use Laravel\Ai\Events\RemovingFileFromStore;
use Laravel\Ai\Events\StoreCreated;
use Laravel\Ai\Events\StoreDeleted;
use Laravel\Ai\Events\StoringFile;

class VectorStoreEventAdapter implements AiSdkEventAdapter
{
    use MapsLaravelAiData;

    public function supports(object $event): bool
    {
        return $event instanceof StoringFile
            || $event instanceof FileStored
            || $event instanceof CreatingStore
            || $event instanceof StoreCreated
            || $event instanceof AddingFileToStore
            || $event instanceof FileAddedToStore
            || $event instanceof RemovingFileFromStore
            || $event instanceof FileRemovedFromStore
            || $event instanceof FileDeleted
            || $event instanceof StoreDeleted;
    }

    public function adapt(object $event): array
    {
        return match (true) {
            $event instanceof StoringFile => $this->started(
                $event->invocationId,
                'Store file',
                'vector_store.file.store',
                $event->provider->name(),
                ['file' => $this->fileMetadata($event->file)],
            ),
            $event instanceof FileStored => $this->finished(
                $event->invocationId,
                $event->provider->name(),
                ['file_id' => $event->response->id()],
            ),
            $event instanceof CreatingStore => $this->started(
                $event->invocationId,
                'Create vector store',
                'vector_store.create',
                $event->provider->name(),
                [
                    'name' => $event->name,
                    'description' => $event->description,
                    'file_ids' => $event->fileIds->values()->all(),
                    'expires_when_idle_for' => $this->interval($event->expiresWhenIdleFor),
                ],
            ),
            $event instanceof StoreCreated => $this->finished(
                $event->invocationId,
                $event->provider->name(),
                [
                    'store_id' => $event->store->id,
                    'name' => $event->store->name,
                    'ready' => $event->store->ready,
                    'file_counts' => $event->store->fileCounts->toArray(),
                ],
            ),
            $event instanceof AddingFileToStore => $this->started(
                $event->invocationId,
                'Add file to vector store',
                'vector_store.file.add',
                $event->provider->name(),
                [
                    'store_id' => $event->storeId,
                    'file_id' => $event->fileId,
                ],
            ),
            $event instanceof FileAddedToStore => $this->finished(
                $event->invocationId,
                $event->provider->name(),
                [
                    'store_id' => $event->storeId,
                    'file_id' => $event->fileId,
                    'document_id' => $event->documentId,
                ],
            ),
            $event instanceof RemovingFileFromStore => $this->started(
                $event->invocationId,
                'Remove file from vector store',
                'vector_store.file.remove',
                $event->provider->name(),
                [
                    'store_id' => $event->storeId,
                    'document_id' => $event->documentId,
                ],
            ),
            $event instanceof FileRemovedFromStore => $this->finished(
                $event->invocationId,
                $event->provider->name(),
                [
                    'store_id' => $event->storeId,
                    'document_id' => $event->documentId,
                ],
            ),
            $event instanceof FileDeleted => $this->instant(
                $event->invocationId,
                'Delete stored file',
                'vector_store.file.delete',
                $event->provider->name(),
                ['file_id' => $event->fileId],
            ),
            $event instanceof StoreDeleted => $this->instant(
                $event->invocationId,
                'Delete vector store',
                'vector_store.delete',
                $event->provider->name(),
                ['store_id' => $event->storeId],
            ),
            default => [],
        };
    }

    /**
     * @param  array<string, mixed>  $request
     * @return list<object>
     */
    private function started(
        string $invocationId,
        string $name,
        string $operation,
        string $provider,
        array $request,
    ): array {
        $now = $this->now();
        $attributes = compact('provider', 'operation');

        return [
            new TraceStarted($invocationId, $invocationId, $name, $now, $attributes),
            new SpanStarted(
                $invocationId,
                $invocationId,
                null,
                SpanType::VectorStore,
                $name,
                $now,
                $request,
                $attributes,
            ),
        ];
    }

    /**
     * @param  array<string, mixed>  $response
     * @return list<object>
     */
    private function finished(
        string $invocationId,
        string $provider,
        array $response,
    ): array {
        $now = $this->now();

        return [
            new SpanFinished(
                $invocationId,
                $invocationId,
                $now,
                SpanStatus::Successful,
                $response,
                attributes: ['provider' => $provider],
            ),
            new TraceFinished($invocationId, $now, TraceStatus::Successful),
        ];
    }

    /**
     * @param  array<string, mixed>  $response
     * @return list<object>
     */
    private function instant(
        string $invocationId,
        string $name,
        string $operation,
        string $provider,
        array $response,
    ): array {
        return [
            ...$this->started(
                $invocationId,
                $name,
                $operation,
                $provider,
                [],
            ),
            ...$this->finished($invocationId, $provider, $response),
        ];
    }

    /** @return array<string, string|null> */
    private function fileMetadata(StorableFile $file): array
    {
        return [
            'type' => $file::class,
            'name' => $file->name(),
            'mime_type' => $file->mimeType(),
        ];
    }

    private function interval(?DateInterval $interval): ?string
    {
        return $interval?->format('P%yY%mM%dDT%hH%iM%sS');
    }
}

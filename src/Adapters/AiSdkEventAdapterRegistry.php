<?php

namespace Kanary\AiObservatory\Adapters;

use Illuminate\Contracts\Container\Container;
use InvalidArgumentException;

class AiSdkEventAdapterRegistry
{
    /** @var list<class-string<AiSdkEventAdapter>> */
    private array $adapterClasses;

    /**
     * @param  list<class-string<AiSdkEventAdapter>>  $adapterClasses
     */
    public function __construct(
        private readonly Container $container,
        array $adapterClasses = [],
    ) {
        $this->adapterClasses = $adapterClasses;
    }

    public function register(string $adapterClass): void
    {
        if (! is_a($adapterClass, AiSdkEventAdapter::class, true)) {
            throw new InvalidArgumentException(
                sprintf('%s must implement %s.', $adapterClass, AiSdkEventAdapter::class),
            );
        }

        if (! in_array($adapterClass, $this->adapterClasses, true)) {
            $this->adapterClasses[] = $adapterClass;
        }
    }

    /** @return list<object> */
    public function adapt(object $event): array
    {
        $adapted = [];

        foreach ($this->adapterClasses as $adapterClass) {
            $adapter = $this->container->make($adapterClass);

            if ($adapter->supports($event)) {
                array_push($adapted, ...$adapter->adapt($event));
            }
        }

        return $adapted;
    }

    /** @return list<class-string<AiSdkEventAdapter>> */
    public function adapters(): array
    {
        return $this->adapterClasses;
    }
}

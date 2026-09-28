<?php

namespace Kanary\AiObservatory\Adapters;

use Closure;
use Illuminate\Contracts\Container\Container;
use InvalidArgumentException;

class AiSdkEventAdapterRegistry
{
    /** @var list<class-string<AiSdkEventAdapter>> */
    private array $adapterClasses;

    /** @var array<class-string, list<class-string<AiSdkEventAdapter>>> */
    private array $matches = [];

    /**
     * @param  list<class-string<AiSdkEventAdapter>>  $adapterClasses
     * @param  Container|Closure(): Container  $container
     */
    public function __construct(
        private readonly Container|Closure $container,
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
            $this->matches = [];
        }
    }

    /** @return list<object> */
    public function adapt(object $event): array
    {
        $adapted = [];
        $eventClass = $event::class;
        // Resolve scoped adapters from the active application, not an Octane worker's boot container.
        $container = $this->container instanceof Closure ? ($this->container)() : $this->container;

        if (isset($this->matches[$eventClass])) {
            foreach ($this->matches[$eventClass] as $adapterClass) {
                array_push(
                    $adapted,
                    ...$container->make($adapterClass)->adapt($event),
                );
            }

            return $adapted;
        }

        $this->matches[$eventClass] = [];

        foreach ($this->adapterClasses as $adapterClass) {
            $adapter = $container->make($adapterClass);

            if ($adapter->supports($event)) {
                $this->matches[$eventClass][] = $adapterClass;
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

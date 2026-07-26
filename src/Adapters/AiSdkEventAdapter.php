<?php

namespace Kanary\AiObservatory\Adapters;

interface AiSdkEventAdapter
{
    public function supports(object $event): bool;

    /** @return list<object> */
    public function adapt(object $event): array;
}

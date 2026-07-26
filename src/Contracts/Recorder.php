<?php

namespace Kanary\AiObservatory\Contracts;

interface Recorder
{
    public function record(object $event): void;
}

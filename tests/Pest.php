<?php

use Kanary\AiObservatory\Tests\TestCase;
use Laravel\Ai\Responses\Data\TextUsage;
use Laravel\Ai\Responses\Data\Usage;

uses(TestCase::class)->in('Feature');

// Keep shared fixtures semantically identical across the two SDK contracts.
function sdkUsage(int $input = 0, int $output = 0, int $write = 0, int $cached = 0, int $reasoning = 0): Usage
{
    return class_exists(TextUsage::class)
        ? new TextUsage($input + $cached + $write, $output, $cached, $write, $reasoning)
        : new Usage($input, $output, $write, $cached, $reasoning);
}

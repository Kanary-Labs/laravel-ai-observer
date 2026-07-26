<?php

namespace Kanary\AiObservatory\Enums;

enum TraceStatus: string
{
    case Running = 'running';
    case Successful = 'successful';
    case Failed = 'failed';
    case Cancelled = 'cancelled';
}

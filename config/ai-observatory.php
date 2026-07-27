<?php

return [
    /*
     * Recording is enabled automatically only for local applications. Set the
     * environment variable explicitly before recording production traffic.
     */
    'enabled' => env(
        'AI_OBSERVATORY_ENABLED',
        env('APP_ENV', 'production') === 'local',
    ),

    'debug' => env('AI_OBSERVATORY_DEBUG', false),

    'path' => env('AI_OBSERVATORY_PATH', 'ai-observatory'),

    'connection' => env('AI_OBSERVATORY_DB_CONNECTION'),

    'recording_mode' => env('AI_OBSERVATORY_RECORDING_MODE', 'sync'),

    'queue' => [
        'connection' => env('AI_OBSERVATORY_QUEUE_CONNECTION'),
        'name' => env('AI_OBSERVATORY_QUEUE', 'default'),
        'max_payload_bytes' => env(
            'AI_OBSERVATORY_QUEUE_MAX_PAYLOAD_BYTES',
            180_000,
        ),
    ],

    'capture' => [
        'prompts' => true,
        'responses' => true,
        'tool_arguments' => true,
        'tool_results' => true,
        'embeddings' => false,
        'stack_traces' => false,
    ],

    'payloads' => [
        'max_bytes' => 100_000,
    ],

    'redaction' => [
        'replacement' => '[REDACTED]',
        'keys' => [
            'authorization',
            'api_key',
            'apikey',
            'access_token',
            'refresh_token',
            'password',
            'secret',
            'client_secret',
            'cookie',
            'set-cookie',
            'private_key',
        ],
        'paths' => [],
    ],

    'sampling' => [
        'rate' => (float) env('AI_OBSERVATORY_SAMPLE_RATE', 1.0),
        'always_record_failures' => env(
            'AI_OBSERVATORY_ALWAYS_RECORD_FAILURES',
            true,
        ),
        'always_record_slow_traces_ms' => env(
            'AI_OBSERVATORY_ALWAYS_RECORD_SLOW_TRACES_MS',
            10_000,
        ),
        'max_buffered_events' => env(
            'AI_OBSERVATORY_MAX_BUFFERED_EVENTS',
            100,
        ),
    ],

    'retention' => [
        'days' => env('AI_OBSERVATORY_RETENTION_DAYS', 14),
    ],

    'recovery' => [
        'stale_after_minutes' => env(
            'AI_OBSERVATORY_STALE_AFTER_MINUTES',
            15,
        ),
    ],

    /*
     * Prices are estimates per one million tokens. Unknown prices must remain
     * null so unpriced usage is never presented as free usage.
     */
    'pricing' => [
        '_meta' => [
            'version' => null,
            'effective_date' => null,
        ],

        // 'openai' => [
        //     'model-name' => [
        //         'input_per_million' => null,
        //         'output_per_million' => null,
        //         'cached_input_per_million' => null,
        //         'cache_write_input_per_million' => null,
        //         'currency' => 'USD',
        //     ],
        // ],
    ],

    'middleware' => [
        'web',
    ],

    'api_middleware' => [
        'throttle:120,1',
    ],

    'dashboard' => [
        'max_spans_per_trace' => 1_000,
        'max_events_per_trace' => 1_000,
        'max_filter_options' => 100,
    ],
];

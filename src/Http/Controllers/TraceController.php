<?php

namespace Kanary\AiObservatory\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Kanary\AiObservatory\Contracts\TraceQueryRepository;

final class TraceController
{
    public function __construct(private readonly TraceQueryRepository $traces) {}

    public function index(Request $request): JsonResponse
    {
        $filters = $request->validate([
            'search' => ['sometimes', 'string', 'max:500'],
            'status' => ['sometimes', 'string', 'in:running,successful,failed,cancelled'],
            'provider' => ['sometimes', 'string', 'max:255'],
            'model' => ['sometimes', 'string', 'max:255'],
            'agent_class' => ['sometimes', 'string', 'max:255'],
            'span_type' => [
                'sometimes',
                'string',
                'in:agent,model,tool,mcp,embedding,rerank,vector_store,image,audio,transcription,internal',
            ],
            'feature' => ['sometimes', 'string', 'max:255'],
            'user' => ['sometimes', 'string', 'max:255'],
            'tenant' => ['sometimes', 'string', 'max:255'],
            'has_error' => ['sometimes', 'boolean'],
            'has_tool_calls' => ['sometimes', 'boolean'],
            'min_duration' => ['sometimes', 'integer', 'min:0'],
            'started_after' => ['sometimes', 'date_format:Y-m-d'],
            'started_before' => ['sometimes', 'date_format:Y-m-d', 'after_or_equal:started_after'],
            'page' => ['sometimes', 'integer', 'min:1'],
            'per_page' => ['sometimes', 'integer', 'min:1', 'max:100'],
        ]);

        foreach (['has_error', 'has_tool_calls'] as $booleanFilter) {
            if ($request->has($booleanFilter)) {
                $filters[$booleanFilter] = $request->boolean($booleanFilter);
            }
        }

        return response()->json($this->traces->paginate($filters));
    }

    public function show(string $traceId): JsonResponse
    {
        $trace = $this->traces->find($traceId);

        abort_if($trace === null, 404);

        return response()->json($trace);
    }
}

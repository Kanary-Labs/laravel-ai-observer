<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::connection(config('ai-observatory.connection'))->create('ai_observatory_spans', function (Blueprint $table): void {
            $table->ulid('id')->primary();
            $table->uuid('trace_id');
            $table->uuid('span_id');
            $table->uuid('parent_span_id')->nullable();
            $table->string('type', 32);
            $table->string('name');
            $table->string('status', 32);
            $table->string('provider')->nullable();
            $table->string('model')->nullable();
            $table->unsignedInteger('sequence');
            $table->timestamp('started_at');
            $table->timestamp('ended_at')->nullable();
            $table->unsignedBigInteger('duration_ms')->nullable();
            $table->unsignedBigInteger('input_tokens')->nullable();
            $table->unsignedBigInteger('output_tokens')->nullable();
            $table->unsignedBigInteger('cached_input_tokens')->nullable();
            $table->unsignedBigInteger('reasoning_tokens')->nullable();
            $table->unsignedBigInteger('total_tokens')->nullable();
            $table->decimal('estimated_cost', 20, 8)->nullable();
            $table->json('request_payload')->nullable();
            $table->json('response_payload')->nullable();
            $table->json('metadata')->nullable();
            $table->string('error_type')->nullable();
            $table->text('error_message')->nullable();
            $table->longText('error_stack')->nullable();
            $table->timestamps();

            $table->unique(['trace_id', 'span_id']);
            $table->index('parent_span_id');
            $table->index('type');
            $table->index('status');
            $table->index('provider');
            $table->index('model');
            $table->index('started_at');
            $table->index(['trace_id', 'sequence']);

            $table->foreign('trace_id')
                ->references('trace_id')
                ->on('ai_observatory_traces')
                ->cascadeOnDelete();
        });
    }

    public function down(): void
    {
        Schema::connection(config('ai-observatory.connection'))->dropIfExists('ai_observatory_spans');
    }
};

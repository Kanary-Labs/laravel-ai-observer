<?php

namespace Kanary\AiObservatory\Enums;

enum SpanType: string
{
    case Agent = 'agent';
    case Model = 'model';
    case Tool = 'tool';
    case Mcp = 'mcp';
    case Embedding = 'embedding';
    case Rerank = 'rerank';
    case VectorStore = 'vector_store';
    case Image = 'image';
    case Audio = 'audio';
    case Transcription = 'transcription';
    case Internal = 'internal';
}

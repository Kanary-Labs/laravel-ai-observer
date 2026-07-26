<!doctype html>
<html lang="en" class="h-full antialiased">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <title>AI Observatory</title>
    <link rel="stylesheet" href="{{ route('ai-observatory.assets', ['asset' => 'ai-observatory.css']) }}?v={{ $observatory['assetVersion'] }}">
</head>
<body class="h-full">
    <div id="ai-observatory"></div>
    <script>
        window.AiObservatory = @json($observatory);
    </script>
    <script type="module" src="{{ route('ai-observatory.assets', ['asset' => 'ai-observatory.js']) }}?v={{ $observatory['assetVersion'] }}"></script>
</body>
</html>

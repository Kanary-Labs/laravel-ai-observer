# AI Observatory workbench

The workbench is a disposable Laravel application powered by Orchestra
Testbench. Its demo command uses Laravel AI SDK fakes, so no provider API keys
are required.

```bash
composer install
vendor/bin/testbench workbench:install
vendor/bin/testbench ai-observatory:install
vendor/bin/testbench migrate
vendor/bin/testbench ai-observatory:demo
vendor/bin/testbench serve
```

Open `http://127.0.0.1:8000/ai-observatory/traces`.

The sample agents cover simple prompts, tool calls, streaming, nested agents,
and an intentionally failing tool. Real-provider testing is opt-in: configure
the SDK in the generated workbench application and invoke an agent without
calling its `fake()` method.

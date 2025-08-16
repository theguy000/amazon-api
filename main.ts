// main.ts - Deno Deploy entrypoint
import app from "./src/index.ts";

// Deno Deploy automatically binds to the right port
Deno.serve(app.fetch);
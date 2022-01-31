import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

console.log(Deno.memoryUsage().heapUsed);
console.log("Listening on http://localhost:8000");
serve((_req: Request) => {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
});
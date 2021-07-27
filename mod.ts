// import {
//   Level,
//   Logger,
//   LogRecord,
//   ConsoleStream,
//   TimeUnit,
// } from "../optic/mod.ts";

// const log = new Logger().addStream(new ConsoleStream());
// //import { blue } from "https://deno.land/std@0.92.0/fmt/colors.ts";

// //const str:string[] = (Deno as {args?: string[]}).args ?? [];

// addEventListener("fetch", (event) => {
//     //log.info(event.request);
//     //console.log(event.request.method);
//     const response = new Response("Hello World! " + event.request.method, {
//       headers: { "content-type": "text/plain" },
//     });
//     //console.log(event.request, event.request.headers, event.request.method);
//     log.info('Headers:', event.request.headers);
//     event.respondWith(response);
//   });

import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

function App() {
  return (
    <html>
      <head>
        <title>Hello from JSX</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
}

addEventListener("fetch", (event) => {
  // renderToString generates html string from JSX components.
  const response = new Response(renderToString(<App />), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });

  event.respondWith(response);
});
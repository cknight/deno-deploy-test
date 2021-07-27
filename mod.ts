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

addEventListener("fetch", (event) => {
  const response = new Response("Hello World 3!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
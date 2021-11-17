// ⚠️ Important! Please make sure the dependencies are up to date.
// You can refresh them in the Dependencies section (left-bottom on CodeSandbox)

import http from "node:http";
import * as runtime from "react/jsx-runtime.js";
import ReactDom from "react-dom/server.js";
import { evaluate } from "@mdx-js/mdx";

// Note: refresh the pane on the right to see changes.

http
  .createServer(async function (_, res) {
    const content = "Hi <span style={{color: 'tomato'}}>there</span>!";
    const { default: Content } = await evaluate(content, runtime);
    ReactDom.renderToNodeStream(Content()).pipe(res);
  })
  .listen(8080);

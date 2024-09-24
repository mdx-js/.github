// ⚠️ Important! Please make sure the dependencies are up to date.
// You can refresh them in the Dependencies section (left-bottom on CodeSandbox)

import http from 'node:http'
import {evaluate} from '@mdx-js/mdx'
import {renderToPipeableStream} from 'react-dom/server'
import * as runtime from 'react/jsx-runtime'

// Note: refresh the pane on the right to see changes.

http
  .createServer(async function (_, response) {
    const mdx = "Hi <span style={{color: 'tomato'}}>there</span>!"
    const {default: Content} = await evaluate(mdx, runtime)
    const {pipe} = renderToPipeableStream(Content({}))
    pipe(response)
  })
  .listen(8080)

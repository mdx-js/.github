import { evaluateSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const mdxContent = `
# heading

* list
* item

\`\`\`js
function () {}
\`\`\`
`;

export default function App() {
  const Content = evaluateSync(mdxContent, { ...runtime }).default;
  return <Content />;
}

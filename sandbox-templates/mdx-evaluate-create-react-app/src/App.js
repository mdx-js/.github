import { useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";

const mdxContent = `
# heading

* list
* item

\`\`\`js
function () {}
\`\`\`
`;

function useMDX(content) {
  const [exports, setExports] = useState({ default: runtime.Fragment });

  useEffect(() => {
    evaluate(mdxContent, { ...runtime }).then((exports) => setExports(exports));
  }, [content]);

  return exports;
}

export default function App() {
  const exports = useMDX(mdxContent);
  const Content = exports.default;
  return <Content />;
}

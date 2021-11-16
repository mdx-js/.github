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
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    evaluate(mdxContent, { ...runtime }).then((exports) =>
      setComponent(exports.default)
    );
  }, [content]);

  return Component;
}

export default function App() {
  const Content = useMDX(mdxContent);
  return <Content />;
}

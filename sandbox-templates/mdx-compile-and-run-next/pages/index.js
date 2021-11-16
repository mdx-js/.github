import { useState, useEffect, Fragment } from "react";
import * as runtime from "react/jsx-runtime.js";
import { compile, run } from "@mdx-js/mdx";

export default function Page({ code }) {
  const [mdxModule, setMdxModule] = useState();
  const Content = mdxModule ? mdxModule.default : Fragment;

  useEffect(() => {
    run(code, runtime).then((exports) => setMdxModule(exports));
  }, [code]);

  return <Content />;
}

export async function getStaticProps() {
  const code = String(
    await compile("# hi", { outputFormat: "function-body" /* …otherOptions */ })
  );
  return { props: { code } };
}

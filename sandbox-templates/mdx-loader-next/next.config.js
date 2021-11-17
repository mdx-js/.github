module.exports = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: "@mdx-js/loader"
        }
      ]
    });

    return config;
  }
};

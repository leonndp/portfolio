module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "/",
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};

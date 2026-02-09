import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api-docs",
        destination: "/zudoku-docs/introduction.html",
      },
      {
        source: "/api-docs/:path*",
        destination: "/zudoku-docs/:path*",
      },
    ];
  },
};
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);

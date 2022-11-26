/** @type {import('next').NextConfig} */

// nextjs
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig

// Next mdx
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

module.exports = withMDX()
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true
  }
})

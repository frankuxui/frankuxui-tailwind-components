import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { components } from '../../components/mdx/codeblock'

export default function Page ({ frontMatter: { title, description }, mdxSource }) {
  return (
    <>
      <h1 className='text-6xl'>{title}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('pages/components/mdx/'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('pages/components/mdx/', slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content, {})

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }

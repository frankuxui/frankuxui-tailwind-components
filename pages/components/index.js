import Link from 'next/link'
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

export default function Components ({ components }) {
  return (
    <div>
      <h1 className='text-5xl'>Componentes</h1>
      {components.map((item) => (
        <p key={components.slug}>
          {components.title}
          <Link href={`/components/${item.frontMatter.slug}`}>{item.frontMatter.title}</Link>
        </p>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('pages/components/mdx/'))

  const components = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('pages/components/mdx/', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      components
    }
  }
}

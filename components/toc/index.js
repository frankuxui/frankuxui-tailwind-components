import React from 'react'
import toc from '@jsdevtools/rehype-toc'

export const useWindow = () => {
  const [window, setWindow] = React.useState(false)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindow(true)
    }
  }, [window])
  return { window, setWindow }
}
export const tocPluging = () => {
  const option = {
    headings: ['h2', 'h3', 'h4', 'h5', 'h6'],
    nav: true,
    cssClasses: {
      toc: 'toc-nav',
      list: 'toc-list',
      listItem: 'mt-2',
      link: 'toc-link text-slate-600'
    }
  }
  return toc(option)
}

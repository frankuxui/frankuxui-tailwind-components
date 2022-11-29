import React from 'react'
import toc from '@jsdevtools/rehype-toc'

export const tocPluging = () => {
  const option = {
    headings: ['h2', 'h3', 'h4', 'h5', 'h6'],
    nav: true,
    cssClasses: {
      toc: 'toc-nav',
      list: 'toc-list',
      listItem: 'mt-2',
      link: 'toc-link underline text-slate-600'
    }
  }
  return toc(option)
}

const TocContent = () => {
  const [hasWindow, setHasWindow] = React.useState(false)
  const renderElementRef = React.useRef(null)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
    if (hasWindow === true) {
      const tocElement = document.querySelector('.toc-nav')
      renderElementRef?.current?.appendChild(tocElement)
    }
  }, [hasWindow])
  return (
    <div ref={renderElementRef} />
  )
}
const Toc = () => {
  return (
    <div className='hidden toc-content md:flex flex-col flex-none mt-12 w-64'>
      <div className='text-lg font-medium mb-2 m-0'>In this page</div>
      <TocContent />
    </div>
  )
}

export default Toc

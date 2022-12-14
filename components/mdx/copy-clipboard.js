import React from 'react'

const CopyClipboard = ({ text, children, onCopied }) => {
  return (
    <button className='absolute right-4 top-4 px-3 py-1 rounded-md text-sm font-medium bg-[#23e09e]' onClick={onCopied}>
      {text}
      {children}
    </button>
  )
}

export default CopyClipboard

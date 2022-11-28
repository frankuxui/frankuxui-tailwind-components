import SyntaxHighlighter from 'components/mdx/codeblock'

export const components = {
  pre: props => {
    return (
      <div className='code-content'>
        <SyntaxHighlighter {...props} />
      </div>
    )
  }
}

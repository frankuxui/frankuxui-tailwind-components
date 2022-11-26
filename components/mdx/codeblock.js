import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import Highlight, { defaultProps } from 'prism-react-renderer'
// import { useEditable } from 'use-editable'

const scope = {
  ...React
}
const LiveCode = (props) => {
  /* const editorRef = React.useRef(null);
  const [code, setCode] = React.useState(props.children.props.children.trim());
  const onEditableChange = React.useCallback((code) => {
    setCode(code.slice(0, -1));
  }, []);

  useEditable(editorRef, onEditableChange, {
    disabled: false,
    indentation: 2
  }); */

  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)

  return (
    <LiveProvider
      code={props.children.props.children.trim()}
      scope={scope}
      language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
      transformCode={code => '/* @jsx mdx */' + code}
    >
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  )
}

const SyntaxHighlighter = props => {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export const components = {
  pre: props => {
    if (props) {
      return (
        <div className='live-code-content'>
          <LiveCode {...props} />
        </div>
      )
    } else {
      return (
        <div className='offline-code-content'>
          <SyntaxHighlighter {...props} />
        </div>
      )
    }
  }
}

import React from 'react'
import classNames from 'classnames'
import { IFrame } from './iframe'

const Demo = ({ children }) => {
  const classListed = 'relative mb-4 mt-8 rounded-xl border border-slate-200 pt-14 pl-6 pr-6 pb-6 after:absolute after:top-4 after:left-6 after:text-sm after:uppercase after:text-slate-300 after:content-["Example"]'

  const [theme, setTheme] = React.useState('light')

  const handleTheme = (e) => {
    if (e.target) {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }
  }
  return (
    <div className={classNames(
      classListed,
      theme
    )}
    >
      <button className='absolute right-4 top-4' onClick={(e) => handleTheme(e)}>😎</button>
      <IFrame>
        <head>
          <meta charset='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <script src='https://cdn.tailwindcss.com' />
        </head>
        {children}
      </IFrame>
    </div>
  )
}

export default Demo

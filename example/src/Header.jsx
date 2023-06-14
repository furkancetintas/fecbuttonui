import React from 'react'

function Header() {
  return (
    <header className='w-full flex justify-center'>
      <div className='container'>
        <div className='flex justify-between'>
          <div className='logo'>
            <a href='/'>
              <h1>FECButtonUI</h1>
            </a>
          </div>
          <div className='flex align-center social-media'>
            <a
              href='https://www.linkedin.com/in/furkancetintas/'
              target='blank'
            >
              Linkedin
            </a>
            <a href='https://github.com/furkancetintas' target='blank'>
              Github
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import Header from './components/header/Header'

function WebLayout({children}) {
  return (
    <>
      <Header></Header>
      <div className='content'>
        {children}
      </div>
    </>
  )
}

export default WebLayout
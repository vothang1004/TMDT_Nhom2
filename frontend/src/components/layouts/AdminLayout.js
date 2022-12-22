import React from 'react'
import HeaderAdmin from './components/header/HeaderAdmin'

function AdminLayout({children}) {
  return (
    <>
        <HeaderAdmin></HeaderAdmin>
        {children}
    </>
  )
}

export default AdminLayout
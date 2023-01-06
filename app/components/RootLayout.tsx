import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function RootLayout({ children, page } : any) {
  return (
    <div className={`layout-${page}`}>
      <Topbar />
      {page === "chats" && <Sidebar />}
      {children}
    </div>
  )
}

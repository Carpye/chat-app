import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar shadow-md p-1 max-w-full'>
        <ul className="menu bg-base-100 w-full p-2 gap-2 rounded-box">
            <li><Link href="/chats/19shgodasdk2389f" className='active'>(image) Misha Aksonov</Link></li>
            <li><Link href="/chats/124sdf2" >Item 2</Link></li>
            <li><Link href="/chats/234sdf" >Item 3</Link></li>
        </ul>
    </div>
  )
}

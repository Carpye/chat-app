// import { useRouter } from "next/router"

import Link from "next/link";
import { AiOutlinePoweroff } from "react-icons/ai";

export default function Topbar() {


  return (
    <div className="topbar navbar bg-base-100 border-b-[1px] border-b-base-200">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">MessMe</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li>
                <button className="text-xl"><AiOutlinePoweroff /></button>
            </li>
            <li tabIndex={0}>
                <a>
                Theme
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 bg-base-100">
                <li><a>Misza</a></li>
                <li><a>to gej</a></li>
                </ul>
            </li>
            <li>
                <span>
                user profile
                </span>
            </li>
            </ul>
        </div>
    </div>
  )
}

// import { useRouter } from "next/router"

import Link from "next/link";
import Image from "next/image";
import { AiOutlinePoweroff } from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";
import defaultUserAvatar from "../public/man.png";

export default function Topbar() {
    const { data: session } = useSession();
    const userAvatar = session?.user?.image || defaultUserAvatar;

  return (
    <div className="topbar navbar bg-base-300 border-b-[1px] border-b-base-200 relative z-10 backdrop-blur-lg bg-opacity-50 shadow-md">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">MessMe</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            {session && <li>
                <button className="text-xl" onClick={() => signOut()}><AiOutlinePoweroff /></button>
            </li>}
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
                {
                    session ? 
                        <>
                            <span>
                                {session?.user?.name}
                                <Image width={75} height={75} className="rounded-full w-10 h-10" src={userAvatar} alt="avatar" />
                            </span>
                        </> :
                        <>
                            <Link href="/login" className="btn btn-ghost normal-case">Login</Link>
                        </>
                }
            </li>
            </ul>
        </div>
    </div>
  )
}

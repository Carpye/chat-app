import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Hero() {
    const { data: session } = useSession();


  return (
    <div className="hero min-h-screen bg-hero">
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">MessMe</h1>
            <p className="mb-5">
                MessMe is a free, open source messaging app that allows you to send messages to your friends and family.
            </p>
            <Link href={session ? "/chat" : "/login"} className="btn btn-primary">Get Started</Link>
        </div>
    </div>
</div>
  )
}

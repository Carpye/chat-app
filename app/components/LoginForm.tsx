import Image from "next/image";
import loginPicture from "../public/login.png";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

export default function LoginForm() {
    function handleCLick(provider: string) {
        console.log(provider);
    }




  return (
    <div className="card card-side bg-base-100 shadow-2xl w-2/5">
        <figure className="w-2/5">
            <Image src={loginPicture} alt={"People"} className="h-full object-cover"/>
        </figure>
        <div className="card-body items-center">
            <h1 className="card-title justify-centerr text-4xl">Login</h1>
            <div className="form-control w-full max-w-xs">
            <label className="label mt-5">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="messme@example.com" className="input input-bordered w-full max-w-xs" />
            <label className="label mt-5">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="*****" className="input input-bordered w-full max-w-xs" />
            <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt">
                    <Link href="/forgotpassword" className="link link-hover">Forgot password?</Link>
                </span>
            </label>
        </div>
            <div className="card-actions justify-center mt-5">
                <button className="btn btn-primary px-16">Hop in!</button>
            </div>
            <div className="divider">or log in via</div>
            <div className="flex justify-center items-center gap-4">
                <button className="icon-button" onClick={() => handleCLick("google")}>
                    <BsGoogle className="oauth-icon" />
                </button>
                <button className="icon-button" onClick={() => handleCLick("github")}>
                    <BsGithub className="oauth-icon" />
                </button>
                <button className="icon-button" onClick={() => handleCLick("discord")}>
                    <FaDiscord className="oauth-icon" />
                </button>
            </div>
        </div>
    </div>
  )
}

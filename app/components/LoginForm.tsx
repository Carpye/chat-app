import Image from "next/image";
import loginPicture from "../public/login.png";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import {BiArrowBack} from "react-icons/bi";

export default function LoginForm() {
    const [forgotPassword, setForgotPassword] = useState(false);
    function handleClick(provider: string) {
        signIn(provider, { redirect: false, callbackUrl: "/chat" })
    }
    function handleSubmit(e:any){
        e.preventDefault()
        console.log("Form submitted")
        // signIn('credentials', {
        //     redirect: false,
        //     email: e.currentTarget[0].value,
        //     password: e.currentTarget[1].value,
        // })
    }




  return (
    <div className="card card-side bg-base-100 shadow-2xl w-2/5">
        <figure className="w-2/5">
            <Image src={loginPicture} alt={"People"} className="h-full object-cover"/>
        </figure>
        {!forgotPassword ?
        <>
            <form className="card-body items-center" onSubmit={e => handleSubmit(e)}>
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
                        <button onClick={() => setForgotPassword(true)} className="link link-hover">Forgot password?</button>
                    </span>
                </label>
            </div>
            <div className="card-actions justify-center mt-5">
                <button className="btn btn-primary px-16">Hop in!</button>
            </div>
            <div className="divider">or log in via</div>
            <div className="flex justify-center items-center gap-4">
                <button className="icon-button" onClick={() => handleClick("google")}>
                    <BsGoogle className="oauth-icon" />
                </button>
                <button className="icon-button" onClick={() => handleClick("github")}>
                    <BsGithub className="oauth-icon" />
                </button>
                <button className="icon-button" onClick={() => handleClick("discord")}>
                    <FaDiscord className="oauth-icon" />
                </button>
            </div>
        </form>
        </> : <>
        <form className="card-body items-center relative" onSubmit={e => handleSubmit(e)}>
            <button onClick={() => setForgotPassword(false)} className="btn btn-ghost btn-sm p-0 absolute top-0 h-12 w-12 left-0 m-8 rounded-full text-2xl">
                <BiArrowBack />
            </button>
            <h1 className="card-title justify-centerr text-4xl">Login</h1>
            <div className="form-control w-full max-w-xs">
                <label className="label mt-5">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="messme@example.com" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="card-actions justify-center mt-5">
                <button className="btn btn-primary px-16" onClick={() => handleClick("email")}>Send magic link!</button>
            </div>
            <div className="divider">or log in via</div>
            <div className="flex justify-center items-center gap-4">
                <button className="icon-button" onClick={() => handleClick("google")}>
                    <BsGoogle className="oauth-icon" />
                </button>
                <button className="icon-button" onClick={() => handleClick("github")}>
                    <BsGithub className="oauth-icon" />
                </button>
                <button className="icon-button" onClick={() => handleClick("discord")}>
                    <FaDiscord className="oauth-icon" />
                </button>
            </div>
        </form>
        </>}
    </div>
  )
}

import Link from 'next/link'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, addDoc } from "@firebase/firestore"
import { db } from '../firebaseconfig'
import getOtherEmail from '../utils/getOtherEmail'
import { useSession } from 'next-auth/react'
import { AiOutlinePlus } from "react-icons/ai";
import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react'


export default function Sidebar() {
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() })); //: {id: string, users: Array<string>} 
  const { data: session } = useSession();
  const user = session?.user;

  const [isNewChatOpen, setIsNewChatOpen] = useState<boolean>(false)
  // const [email, setEmail] = useState<string>('')
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
  const emailRef = useRef<HTMLInputElement>(null)
  
  async function handleSubmit(e: any) {
    const email: string | any = emailRef.current?.value
    e.preventDefault()
    console.log(!!(email.includes("@") && email !== "" && email));
    
    if (chatExists(email)) {
      setIsEmailValid(false)
      console.log("invalid email");
      
      return
    } else if (emailIsValid(email)){
      setIsEmailValid(true)
      await addDoc(collection(db, "chats"), {
        users: [user?.email, email]
      }).then(() => {
       setIsNewChatOpen(false)
      })
    }
    
  }
  
  function chatExists(email: string) {
    return chats?.find((chat: any) => (chat.users.includes(user?.email) && chat.users.includes(email)))
  }

  function emailIsValid(email:string) {
    return !!(email.includes("@") && email !== "" && email && email != user?.email)
  }

  

  return (
    <>
    {isNewChatOpen && <NewChatModal handleSubmit={handleSubmit} emailRef={emailRef} isEmailValid={isEmailValid} />}
    <div className='sidebar shadow-md p-1 max-w-full relative'>
      <ul className="menu bg-base-100 w-full p-2 gap-2 rounded-box">
          {chats?.filter((chat: any) => chat.users.includes(user?.email)).map((chat: any) => (
            <li key={chat.id}>
              <Link href={`/chat/${chat.id}`} >
                {getOtherEmail(chat.users, user)}
              </Link>
            </li>
          ))}
      </ul>
      <NewChatButton setIsNewChatOpen={setIsNewChatOpen}/>
    </div>
    </>
  )
}

function NewChatButton({setIsNewChatOpen} : any) {
  return (
    <label htmlFor="my-modal-4" className="btn btn-circle absolute bottom-4 right-4 text-3xl shadow-md" onClick={() => setIsNewChatOpen(true)}>
      <AiOutlinePlus />
    </label>
  )
}

function NewChatModal(props : any) {
    
  
  return (
    <>
      {/* Put this part before </body> tag */}
      <form onSubmit={(e:any) => props.handleSubmit(e)} className="absolute">
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative flex justify-center items-center flex-col gap-8" htmlFor="user-email">
            <h3 className="text-3xl font-bold">Insert user email</h3>
            <fieldset>
            {!props.isEmailValid && 
            <label className="label">
              <span className="label-text text-error">Invalid email</span>
            </label>
            }
            <input ref={props.emailRef} type="email" placeholder="example@messme.com" id='newchatemail' name="email" className={`input input-bordered w-full max-w-xs ${ !props.isEmailValid && "input-error" }`} />
            </fieldset>
            <input type="submit" value="Create chat!" className="btn btn-primary" />
          </label>
        </label>
      </form>
    </>
  )
}
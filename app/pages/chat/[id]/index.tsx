import Message from '../../../components/Message'
import RootLayout from '../../../components/RootLayout'
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'
import { addDoc, collection, doc, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../firebaseconfig'
import getOtherEmail from '../../../utils/getOtherEmail'
import { useSession } from 'next-auth/react'
import { useState, useRef, useEffect } from 'react'

export default function Page() {

  const router = useRouter()
  const { id } = router.query

  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"))
  const [messages] = useCollectionData(q);

  const bottomOfChat: any = useRef(null)

  // useEffect(() => {
  //   // setTimeout(() => {
  //     bottomOfChat?.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  //   // }, 100)
  // }, [messages])

  useEffect(() => {
    bottomOfChat?.current?.scrollIntoView({ behavior: "auto", block: "end" })
  }, [messages])
  

  return (
    <RootLayout page="chats">
        <div className="uwu-panel w-full h-full relative bg-base-300 overflow-hidden">
        <ChatterDataPanel id={id} />
          <div className="uwu-container p-4 overflow-y-scroll">
          {
            messages?.map((message: any, index: number) => {
              const data = {
                first: messages[index - 1]?.sender !== message.sender,
                last: messages[index + 1]?.sender !== message.sender,
              }
              return <Message key={Math.random()} message={message} data={data} />
            })
          }
          <div className="scroll-to" ref={bottomOfChat}></div>
          </div>
          <MessageInput id={id}/>
        </div>

    </RootLayout>
  )
}

function ChatterDataPanel({id} : any) {
  const { data: session } = useSession();

  // const [chat] = useDocumentData(doc(db, "chats", id))

  return (
    <div className="uwu-info-panel flex justify-between items-center bg-base-200 p-6">
      {/* {getOtherEmail(chat?.users, session?.user)} */} Email placeholder (to fix)
    </div>
  )
}

function MessageInput({ id } : any) {
  const { data: session } = useSession();

  const [message, setMessage] = useState("")
  
  async function handleSubmit(e: any) {
    e.preventDefault();
    setMessage("")
    
    await addDoc(collection(db, `chats/${id}/messages`), {
      text: message,
      sender: session?.user?.email,
      timestamp: serverTimestamp()
    })
  }


  return (
    <div className="uwu-message-sender flex items-center bg-base-300 p-2 w-full">
      <form className='w-full' onSubmit={handleSubmit}>
        <input type="text" placeholder="Type here" className="input w-full input-lg bg-base-200" onChange={(e: any) => setMessage(e.target.value)} value={message}/>
        <input type="submit" hidden/>
      </form>
    </div>
  )
}

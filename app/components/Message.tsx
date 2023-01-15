import { useSession } from "next-auth/react"

export default function Message({ message, data } : { message: { sender: string, timestamp: any, text: string }, data: { first: boolean, last: boolean }}) {
    const { data: session } = useSession();    
  return (
    <>
        <div className={`chat chat-${session?.user?.email == message.sender ? "end" : "start" }`}>
            { data.first && <div className="chat-header mx-3">
                {message.sender}
            </div>}
            <div className="chat-bubble">{message.text}</div>
            { data.last && <div className="chat-footer opacity-50">
                {/* <time className="text-xs opacity-50">{formatDate(message.timestamp.toDate())}</time> */}
            </div>}
        </div>
    </>

  )
}

function formatDate(timestamp: Date) {
    // const formattedDate = 
    // create date with current time and date, if its today, then show time, if its not today, then show date
    const date = new Date(timestamp)
    const now = new Date()
    const formattedDate = new Intl.DateTimeFormat('pl-PL', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    }).format(timestamp)
    if (date.getDate() !== now.getDate()) {
        return new Intl.DateTimeFormat('pl-PL', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        }).format(timestamp)
    }

    return formattedDate

}
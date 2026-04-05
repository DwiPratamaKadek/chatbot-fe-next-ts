
export default function ChatResponse(
  {children} : Props
) {
    return (
        <div>
            <h1>Chat Reponse</h1>
            <div>
                <p>{children}</p>
            </div>
        </div>
    )    
}

type Props = {
    children : string
}
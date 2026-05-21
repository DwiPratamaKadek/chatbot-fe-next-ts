'use client'

export default function ChatResponse( 
  {children , className} : Props
) {


    return (
        <div 
            className={className}
        >
            {children}
        </div>
    )    
}

type Props = {
    children : React.ReactNode
    className : string
}
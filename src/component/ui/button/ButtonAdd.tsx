'use client'

export default function ButtonAdd(
    {children} : {children:React.ReactNode}
){
    return(
        <div>
            <button type="submit" className="border border-blue-950 rounded-xl hover:bg-blue-950 hover:text-white transition-all duration-300 delay-75">{children}</button>
        </div>

    )
}
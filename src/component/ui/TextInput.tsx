
export default function TextInput(
    { value, onChange, onSend }: 
    { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onSend: () => void }
) {

    return(
        <div>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={onSend}>Send</button>
        </div>
    )
}
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextInput(
    { value, onChange, onSend }: 
    { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; onSend: () => void }
) {

    return(
        <div className="flex mx-4 gap-5 p-3  bg-gray-700 rounded-2xl w-auto items-center ">
            <textarea className="md:w-xl outline-0 " value={value} onChange={onChange} placeholder="Ask About Bali" />
            <button className="bg-gray-600 p-2 rounded-xl" onClick={onSend}><FontAwesomeIcon icon={faPaperPlane}/></button>
        </div>
    )
}
import { Input} from "antd"

const { TextArea } = Input;

export default function DetailsInput(p) {
    const handleChange=(e)=>{
        p.setDetails(e.target.value)
    }
    return (
        <TextArea showCount maxLength={1000} placeholder="详细说明（选填）" style={{width:'978px',height:'250px',resize:'none'}} onBlur={handleChange}/>
    )
}
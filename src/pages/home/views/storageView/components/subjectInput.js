import { Input } from "antd"

export default function SubjectInput(p) {
    const handleChange=(e)=>{
    p.setSubject(e.target.value)
}
    return (
        <Input
            style={{width:'410px'}}
            placeholder="不限"
            onBlur={handleChange}
        >
        </Input>
    )
}
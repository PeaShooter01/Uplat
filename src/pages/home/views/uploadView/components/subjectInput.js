import { Input } from "antd"

export default function SubjectInput(p) {
    const handleChange=(e)=>{
    p.setSubject(e.target.value)
}
    return (
        <Input
            style={{width:'320px'}}
            placeholder="输入科目（选填）"
            onBlur={handleChange}
        >
        </Input>
    )
}
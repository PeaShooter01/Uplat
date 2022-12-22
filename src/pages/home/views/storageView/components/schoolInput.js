import { Input } from "antd"

export default function SchoolInput(p) {
    const handleChange=(e)=>{
    p.setSchool(e.target.value)
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
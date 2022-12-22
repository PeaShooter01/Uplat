import { Input } from "antd"

export default function SchoolInput(p) {
    const handleChange=(e)=>{
    p.setSchool(e.target.value)
}
    return (
        <Input
            style={{width:'320px'}}
            placeholder="输入学校或机构（选填）"
            onBlur={handleChange}
        >
        </Input>
    )
}
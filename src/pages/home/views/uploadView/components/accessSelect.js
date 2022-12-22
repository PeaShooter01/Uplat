import { Select } from "antd"

const { Option } = Select;

const items=['公开','用户组内','私有']

export default function AccessSelect(p) {
    const handleChange=(value)=>{
    p.setAccess(value)
}
    return (
        <Select
            showSearch
            style={{width:'320px'}}
            placeholder="选择访问权限"
            onChange={handleChange}
            status={p.accessValid}
        >
            {items.map(
                (item,index)=>{
                    return (
                        <Option value={item} key={index} />
                    )
                })}
        </Select>
    )
}
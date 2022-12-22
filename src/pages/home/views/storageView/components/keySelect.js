import { Select } from "antd"

const {Option} = Select;

const children = ['key1','key2','key3'];

export default function KeySelect(p) {
    const handleChange=(value)=>{
        p.setKeys(value)
    }
    return (
        <Select
            style={{width:'978px'}}
            showSearch
            mode="tags"
            placeholder="添加关键词"
            onChange={handleChange}
        >
            {children.map(
                (item,index)=>{
                    return (
                        <Option value={item} key={index} />
                    )
                })}
        </Select>
    )
}
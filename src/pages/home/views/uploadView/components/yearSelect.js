import { Select } from "antd"

const { Option } = Select;
const items=[]
items.push('不限')
let date=new Date()
let year=date.getFullYear()
for(let i=0;i<=60;i++)
    items.push((year-i).toString()+'年')

export default function YearSelect(p) {

    const handleChange=(value)=>{
        p.setYear(value)
    }
        return (
            <Select
                showSearch
                style={{width:'320px'}}
                placeholder="选择年份"
                onChange={handleChange}
                status={p.yearValid}
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
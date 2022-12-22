import { Input } from "antd"

const { Search } = Input;

export default function SearchInput() {
    return (
        <Search allowClear enterButton="搜索" style={{ width: '30%' }} placeholder='请输入搜索内容' size='large'/>
    )
}
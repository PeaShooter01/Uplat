import { Menu} from "antd"
import { Link } from "react-router-dom"

const items = [
    { label: (<Link to="/">学习辅导</Link>), key: '1' },
    { label: (<Link to="/">高校真题</Link>), key: '2' },
    { label: (<Link to="/">考研资料</Link>), key: '3' },
    { label: (<Link to="/">外语备考</Link>), key: '4' },
    { label: (<Link to="/">竞赛资料</Link>), key: '5' },
    { label: (<Link to="/">经验分享</Link>), key: '6' },
    { label: (<Link to="/">作业解析</Link>), key: '7' },
]

export default function VerticalMenu() {
    return (
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items} style={{width:'200px'}}/>
    )
}
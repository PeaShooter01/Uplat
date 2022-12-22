import { Menu } from "antd"
import { HomeFilled } from "@ant-design/icons"
import { Link ,useLocation} from "react-router-dom"

const items = [
    { label: (<Link to="/">首页</Link>), key: 'home', icon: <HomeFilled /> },
    { label: (<Link to="/storage">资料库</Link>), key: 'storage' },
    { label: (<Link to="/upload">上传</Link>), key: 'upload' },
    { label: (<Link to="/about">关于</Link>), key: 'about' },
  ]

export default function HeadMenu() {
    const location=useLocation()
    let currentPath=[]
    if(location.pathname==='/')currentPath=['home']
    else if(location.pathname==='/storage')currentPath=['storage']
    else if(location.pathname==='/upload')currentPath=['upload']
    else if(location.pathname==='/about')currentPath=['about']
    else if(location.pathname==='/upload/success')currentPath=['upload']
    else if(location.pathname==='/upload/error')currentPath=['upload']
    return (
        <Menu theme='light' mode="horizontal" selectedKeys={currentPath} items={items} />
    )
}
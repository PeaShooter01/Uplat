import { Menu } from 'antd';
import React from 'react';
import { Link ,useLocation} from "react-router-dom"
import { UserOutlined } from '@ant-design/icons';
const items = [
    {
        
        label: (<Link to="/person/myhome">我的主页</Link>),
        key: 'setting:1',
        icon: <UserOutlined/>,
            
    },
    {
        type: 'group',
        label: '账号管理',
        children: [
            {
                label: (<Link to="/person/information">修改信息</Link>),
                key: 'setting:2',
            },
            {
                label: (<Link to="/person/security">账号安全</Link>),
                key: 'setting:3',
            },
        ],
    },
    {
        type: 'group',
        label: '资源管理',
        children: [
            {
                label: (<Link to="/person/myupload">我的上传</Link>),
                key: 'setting:4',
            },
            {
                label: (<Link to="/person/mydownload">我的下载</Link>),
                key: 'setting:5',
            },
            {
                label: (<Link to="/person/collection">我的收藏</Link>),
                key: 'setting:6',
            }
        ],
    },
]
export default function PersonalPage () {
    const location=useLocation()
    let currentPath=[]
    if(location.pathname==='/person/myhome')currentPath=['setting:1']
    else if(location.pathname==='/person/information')currentPath=['setting:2']
    else if(location.pathname==='/person/security')currentPath=['setting:3']
    else if(location.pathname==='/person/myupload')currentPath=['setting:4']
    else if(location.pathname==='/person/mydownload')currentPath=['setting:5']
    else if(location.pathname==='/person/collection')currentPath=['setting:6']
  return <Menu selectedKeys={currentPath} mode="inline" items={items} style={{width:'200px',height:'800px'}} />;
};
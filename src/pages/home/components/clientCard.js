import { Space, Button, message } from "antd"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

export default function ClientCard() {
    const navigate = useNavigate()
    const quit = () => {
        message.success('退出成功')
        localStorage.removeItem('token')
        localStorage.removeItem('avatar')
        localStorage.removeItem('school')
        localStorage.removeItem('cash')
        localStorage.removeItem('vip')
        localStorage.removeItem('name')
        localStorage.removeItem('gender')
        localStorage.removeItem('birthday')
        localStorage.removeItem('region')
        localStorage.removeItem('phone')
        localStorage.removeItem('email')
        localStorage.removeItem('address')
        localStorage.removeItem('identity')
        localStorage.removeItem('period')
        localStorage.removeItem('grade')
        navigate('/')
    }
    const authentication = () => {
        axios.get('http://127.0.0.1:3007/person/authentication').then(res => {
            if (res.data.status === 2) {
                if (localStorage.getItem('token')) {
                    message.warning('登录失效，请重新登录')
                    localStorage.removeItem('token')
                    localStorage.removeItem('avatar')
                    localStorage.removeItem('school')
                    localStorage.removeItem('cash')
                    localStorage.removeItem('vip')
                    localStorage.removeItem('name')
                    localStorage.removeItem('gender')
                    localStorage.removeItem('birthday')
                    localStorage.removeItem('region')
                    localStorage.removeItem('phone')
                    localStorage.removeItem('email')
                    localStorage.removeItem('address')
                    localStorage.removeItem('identity')
                    localStorage.removeItem('period')
                    localStorage.removeItem('grade')
                }
                else
                    message.warning('请登录')
                navigate('/login')
            }
        }).catch((err) => { message.error('网络错误') })
    }
    return (
        <Space direction="vertical">
            <Link to='/person/myhome'><Button type="text" onClick={authentication}>个人中心</Button></Link>
            <Link to='/person/myupload'><Button type="text" onClick={authentication}>我的上传</Button></Link>
            <Link to='/person/mydownload'><Button type="text" onClick={authentication}>我的下载</Button></Link>
            <Link to='/person/collection'><Button type="text" onClick={authentication}>我的收藏</Button></Link>
            <Button type="link" onClick={quit}>退出登录</Button>
        </Space>
    )
}
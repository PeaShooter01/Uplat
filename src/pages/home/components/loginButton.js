import { Button, Popover, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ClientCard from './clientCard';
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login');
    }
    const handleRegister = () => {
        navigate('/register');
    }
    let avatar
    if(localStorage.getItem('avatar'))
        avatar=localStorage.getItem('avatar')
    if (localStorage.getItem('token'))
        return (
            <Popover content={<ClientCard />} placement="bottomRight" arrowPointAtCenter>
                <Avatar icon={<UserOutlined />} src={avatar} />
            </Popover>
        )
    else
        return (
            <div>
                <Button type="link" onClick={handleLogin}>登录</Button>
                <Button type="link" onClick={handleRegister}>注册</Button>
            </div>
        )
}
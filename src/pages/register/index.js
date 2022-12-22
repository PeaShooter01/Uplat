import { Card, Tabs, Space, Row, Col, Input, Button, message} from 'antd';
import { UserAddOutlined, KeyOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import './index.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Register() {
    const navigate = useNavigate()
    if (localStorage.getItem('token')) {
        message.warning('您已登录')
    }
    const [words, setWords] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameValid, setUsernameValid] = useState('');
    const [passwordValid, setPasswordValid] = useState('');
    const [clicked, setClicked] = useState(false);
    const onChange = (key) => {
        if (key === 1)
            navigate('/login');
        else if (key === 2)
            navigate('/register');
    }
    const ret = () => {
        navigate('/');
    }
    useEffect(() => {
        if (clicked === true) {
            if (username === '') {
                setWords('用户名不能为空')
                setUsernameValid('error')
            }
            if (password === '') {
                setWords('密码不能为空')
                setPasswordValid('error')
            }
            if (username === '' && password === '') {
                setWords('用户名和密码不能为空')
                setUsernameValid('error')
                setPasswordValid('error')
            }
            if (usernameValid === '' && passwordValid === '' && username !== '' && password !== '')
                axios.post('http://127.0.0.1:3007/user/register', { username, password }).then(response => {
                    if (response.data.status === 1) setWords(response.data.message)
                    else if (response.data.status === 0) {
                        message.success('注册成功')
                        localStorage.setItem('userName',username)
                        navigate('/login')
                    }
                }).catch((err) => { message.error('网络错误') })
            setClicked(false)
        }
    })
    return (
        <div id='register'>
            <Card id='card'>
                <Tabs
                    defaultActiveKey={2}
                    onChange={onChange}
                    items={[
                        {
                            label: `登录`,
                            key: 1,
                        },
                        {
                            label: `注册`,
                            key: 2,
                        },
                    ]}
                />
                <div id="registerview">
                    <Space direction="vertical" style={{ width: '100%' }} size='large'>
                        <Row justify="center">
                            <Input size="large" placeholder="用户名" prefix={<UserAddOutlined />} allowClear status={usernameValid} autoFocus
                                onBlur={
                                    (e) => {
                                        setUsername(e.target.value)
                                        setUsernameValid('')
                                        axios.post('http://127.0.0.1:3007/user/check', { username: e.target.value },).then(response => {
                                            if (response.data.exist === true && response.data.status === 0) {
                                                setWords('用户名已经存在')
                                                setUsernameValid('error')
                                            }
                                            else {
                                                setWords('')
                                                setUsernameValid('')
                                            }
                                        })
                                    }}
                            />
                        </Row>
                        <Row justify="center">
                            <Input.Password placeholder="密码" size="large" prefix={<KeyOutlined />} allowClear status={passwordValid}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setPasswordValid('')
                                }}
                                onPressEnter={()=>{
                                    setClicked(true)
                                }}
                            />
                        </Row>
                        <Row>
                            <p style={{ color: 'red' }}>{words}</p>
                        </Row>
                        <Row>
                            <Col span={11}>
                                <Button type="primary" size="large" block
                                disabled={localStorage.getItem('token')}
                                    onClick={() => {
                                        setClicked(true)
                                    }}
                                >注册</Button>
                            </Col>
                            <Col span={2} />
                            <Col span={11}>
                                <Button type="defalt" size="large" onClick={ret} block>返回</Button>
                            </Col>
                        </Row>
                    </Space>
                </div>
            </Card>
        </div>
    )
}
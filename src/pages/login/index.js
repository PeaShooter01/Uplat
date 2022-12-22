import { Card, Tabs ,Space,Row,Col,Input,Button,message} from 'antd';
import { UserOutlined ,KeyOutlined,EyeTwoTone,EyeInvisibleOutlined} from '@ant-design/icons';
import './index.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {useState,useEffect} from 'react'

export default function Login() {
    const navigate = useNavigate()
    if(localStorage.getItem('token')){
        message.warning('您已登录')
    }
    const [words,setWords]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [usernameValid,setUsernameValid]=useState('');
    const [passwordValid,setPasswordValid]=useState('');
    const [clicked,setClicked]=useState(false);
    
    const onChange = (key) => {
        if (key === 1)
            navigate('/login');
        else if (key === 2)
            navigate('/register');
    }
    const ret=()=>{
        navigate('/');
    }
    useEffect(()=>{
        if(clicked===true)
        {
            if(username==='')
            {
                setWords('用户名不能为空')
                setUsernameValid('error')
            }
            if(password==='')
            {
                setWords('密码不能为空')
                setPasswordValid('error')
            }
            if(username===''&&password==='')
            {
                setWords('用户名和密码不能为空')
                setUsernameValid('error')
                setPasswordValid('error')
            }
            if(usernameValid===''&&passwordValid===''&&username!==''&&password!=='')
                axios.post('http://127.0.0.1:3007/user/login',{username,password}).then(response=>{
                    if(response.data.status===1)setWords(response.data.message)
                    else if(response.data.status===0)
                    {
                        message.success('登录成功')
                        localStorage.setItem('userName',username)
                        localStorage.setItem('token',response.data.token)
                        localStorage.setItem('avatar',response.data.avatar)
                        localStorage.setItem('school',response.data.school)
                        localStorage.setItem('cash',response.data.cash)
                        localStorage.setItem('vip',response.data.vip)
                        localStorage.setItem('name',response.data.name)
                        localStorage.setItem('gender',response.data.gender)
                        localStorage.setItem('birthday',response.data.birthday)
                        localStorage.setItem('region',response.data.region)
                        localStorage.setItem('phone',response.data.phone)
                        localStorage.setItem('email',response.data.email)
                        localStorage.setItem('address',response.data.address)
                        localStorage.setItem('identity',response.data.identity)
                        localStorage.setItem('period',response.data.period)
                        localStorage.setItem('grade',response.data.grade)
                        navigate('/')
                    }
                }).catch((err)=>{message.error('网络错误')})
            setClicked(false)   
        }
    })
    return (
        <div id='login'>
            <Card id='card'>
                <Tabs
                    defaultActiveKey={1}
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
                    <div id="loginview">
                        <Space direction="vertical" style={{ width: '100%' }} size='large'>
                            <Row justify="center">
                                <Input size="large" placeholder="用户名" prefix={<UserOutlined />} status={usernameValid}
                                defaultValue={localStorage.getItem('userName')} autoFocus
                                onBlur={(e)=>{
                                    setUsername(e.target.value)
                                    setUsernameValid('')
                                }}
                                />
                            </Row>
                            <Row justify="center">
                                <Input.Password placeholder="密码" size="large" prefix={<KeyOutlined />} status={passwordValid}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                        setPasswordValid('')
                                    }}
                                    onPressEnter={()=>{
                                        setClicked(true)
                                    }}
                                />
                            </Row>
                            <Row>
                                <p style={{color:'red'}}>{words}</p>
                            </Row>
                            <Row>
                                <Col span={11}>
                                    <Button type="primary" size="large" block
                                    disabled={localStorage.getItem('token')}
                                    onClick={()=>{
                                        setClicked(true)
                                    }}
                                    >登录</Button>
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
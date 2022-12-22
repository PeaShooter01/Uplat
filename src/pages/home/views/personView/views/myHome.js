import { Avatar, Space, Descriptions, Row} from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function MyHome (){
    let avatar, username = '昵称'
    if (localStorage.getItem('avatar'))
        avatar = localStorage.getItem('avatar')
    if (localStorage.getItem('userName'))
        username = localStorage.getItem('userName')
    return (
        <Space direction='vertical' size='large' style={{ display: 'flex' }}>
            <Row /><Row />
            <Row justify='center' wrap={false}>
                <Space>
                    <Avatar icon={<UserOutlined />} src={avatar} size={100} />
                    <Descriptions title={username} style={{ width: '500px' }}>
                        <Descriptions.Item label="学校" >{localStorage.getItem('school')}</Descriptions.Item>
                    </Descriptions>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <Descriptions title="我的资产" style={{ width: '600px' }} bordered>
                        <Descriptions.Item label="储值">{localStorage.getItem('cash')}</Descriptions.Item>
                        <Descriptions.Item label="会员">{localStorage.getItem('vip')}</Descriptions.Item>
                    </Descriptions>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <Descriptions title="基本信息" column={2} style={{ width: '600px' }} bordered>
                        <Descriptions.Item label="姓名">{localStorage.getItem('name')}</Descriptions.Item>
                        <Descriptions.Item label="生日">{localStorage.getItem('birthday')}</Descriptions.Item>
                        <Descriptions.Item label="性别">{localStorage.getItem('gender')}</Descriptions.Item>
                        <Descriptions.Item label="地区">{localStorage.getItem('region')}</Descriptions.Item>
                        <Descriptions.Item label="手机">{localStorage.getItem('phone')}</Descriptions.Item>
                        <Descriptions.Item label="邮箱">{localStorage.getItem('email')}</Descriptions.Item>
                        <Descriptions.Item label="地址">{localStorage.getItem('address')}</Descriptions.Item>
                    </Descriptions>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <Descriptions title="身份信息" column={2} style={{ width: '600px' }} bordered>
                        <Descriptions.Item label="身份">{localStorage.getItem('identity')}</Descriptions.Item>
                        <Descriptions.Item label="学段">{localStorage.getItem('period')}</Descriptions.Item>
                        <Descriptions.Item label="年级">{localStorage.getItem('grade')}</Descriptions.Item>
                        <Descriptions.Item label="学校">{localStorage.getItem('school')}</Descriptions.Item>
                    </Descriptions>
                </Space>
            </Row>
        </Space>
    );
};
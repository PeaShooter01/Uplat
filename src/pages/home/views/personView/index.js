import { Row, Space, PageHeader,message} from 'antd';
import { Routes, Route,useNavigate} from 'react-router-dom';
import PersonalPage from './views/personalPage';
import Information from './views/information';
import MyHome from './views/myHome';
import MyUpload from './views/myupload';
import MyDownLoad from './views/mydownload';
import Collection from './views/collection';

export default function PersonView() {
    // const [data, setData] = useState()
    // const navigate=useNavigate()
    // if (!data) {
    //     axios.get('http://127.0.0.1:3007/person/usermessage').then(response => {
    //         if (response.data.status === 1) message.error(response.data.message)
    //         else if (response.data.status === 0) {
    //             setData(response.data)
    //         }
    //         else if (response.data.status === 2) {
    //             if (localStorage.getItem('token')) {
    //                 message.warning('登录失效，请重新登录')
    //                 localStorage.removeItem('token')
    //             }
    //             else
    //                 message.warning('请登录')
    //             navigate('/login')
    //         }
    //     }).catch((err)=>{message.error('网络错误')})
    // }
    return (
        <Space direction="vertical" size='large' style={{ display: 'flex' }}>
            <Row>
                <PageHeader title='个人中心' />
            </Row>
            <Row justify='center' wrap={false}>
                <Space size={0} align='start'>
                    <PersonalPage />
                    <div style={{ width: '800px',height:'800px' ,backgroundColor: 'white' }} >
                        <Routes>
                            <Route path='/information/*' element={<Information />} />
                            <Route path='/myhome/*' element={<MyHome />} />
                            <Route path='/myupload/*' element={<MyUpload />} />
                            <Route path='/mydownload/*' element={<MyDownLoad />} />
                            <Route path='/collection/*' element={<Collection />} />
                        </Routes>
                    </div>
                </Space>

            </Row>
        </Space>
    )
}
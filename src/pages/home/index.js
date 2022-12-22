import { Layout, Col, Row } from 'antd';
import HeadCenter from './components/headCenter';
import { Routes, Route} from 'react-router-dom';
import HeadMenu from './components/headMenu';
import LoginButton from './components/loginButton';
import SearchView from './views/searchView';
import StorageView from './views/storageView';
import AboutView from './views/aboutView';
import UploadView from './views/uploadView';
import PersonView from './views/personView';
import UploadSuccessView from './views/uploadSucessView';
import UploadErrorView from './views/uploadErrorView';
import HeadLogo from './components/headLogo';
const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout>
      <Header style={{ padding: '0', zIndex: 1, backgroundColor: 'white', position: 'fixed', width: '100%', opacity: 0.95 }}>
        <Row>
          <Col span={6}>
            <HeadMenu/>
          </Col>
          <Col span={2}>
              <HeadLogo/>
          </Col>
          <Col span={8} >
            <Row justify='center'>
              <Col>
                <HeadCenter/>
              </Col>
            </Row>
          </Col>
          <Col span={8} >
            <Row justify='center'>
              <Col>
                <LoginButton />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 5%', marginTop: 64 }}>
        <Routes>
          <Route path='*' element={<SearchView />} />
          <Route path='/storage/*' element={<StorageView />} />
          <Route path='/upload/*' element={<UploadView />} />
          <Route path='/upload/success/*' element={<UploadSuccessView />} />
          <Route path='/upload/error/*' element={<UploadErrorView />} />
          <Route path='/about/*' element={<AboutView />} />
          <Route path='/person/*' element={<PersonView />}/>
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Uplat ©2022</Footer>
    </Layout>
  );
}

export default Home;
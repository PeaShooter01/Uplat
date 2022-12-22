import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register';
import axios from 'axios'
import './App.less'

function App() {
  axios.interceptors.request.use(
    config=>{
      if(localStorage.getItem('token'))
        config.headers['authorization'] = localStorage.getItem('token')
      return config
    },
    err=>{
      return Promise.reject(err)
    })
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/login/*'element={<Login />} />
        <Route path='/register/*'element={<Register />} />
      </Routes>
    </Router>
    </ConfigProvider>
  );
}

export default App;

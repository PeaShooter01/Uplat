import { useLocation } from "react-router-dom"
import { BookFilled } from "@ant-design/icons";
import { Input ,Col} from "antd";

const { Search } = Input;

export default function HeadCenter (){
    const location=useLocation()
    if(location.pathname==='/')
        return (
                <Search allowClear enterButton="搜索" style={{ position:'absolute',width: '300px' ,left:'-150px',top:'15px'}} placeholder='请输入搜索内容' />
            
        )
    else
        return <img style={{width:'110px',height:'40px'}} src="http://localhost:3000/logo_.jpg" alt=''/>
}
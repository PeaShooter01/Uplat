import { PageHeader, Result,Button } from 'antd';
import { useNavigate } from "react-router-dom";

export default function UploadSuccessView() {
    const navigate=useNavigate()
    const ret=()=>{
        navigate('/');
    }
    return (
        <div>
            <PageHeader title="上传成功" />
            <div>
                <Result
                status="success"
                title="上传成功"
                subTitle="您上传的资料在经过审核后将进入资料库，请耐心等待。"
                extra={[
                    <Button type="primary" size='large' onClick={ret}>返回首页</Button>,
                ]}
            />
            </div>
            
        </div>
    )
}
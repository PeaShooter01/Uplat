import { PageHeader, Result,Button } from 'antd';
import { useNavigate } from "react-router-dom";

export default function UploadErrorView() {
    const navigate=useNavigate()
    const ret=()=>{
        navigate('/home');
    }
    return (
        <div>
            <PageHeader title="上传失败" />
            <div>
                <Result
                status="error"
                title="上传失败"
                subTitle="资料未能成功上传，请重试。"
                extra={[
                    <Button type="primary" size='large' onClick={ret} danger>返回</Button>,
                ]}
            />
            </div>
            
        </div>
    )
}
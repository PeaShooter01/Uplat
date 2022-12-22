import { Button,message} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SubmitButton(p) {

    const navigate=useNavigate()
    const handleUpload = () => {
        if(p.category===''){
            p.setCategoryValid('error')
        }
        else
            p.setCategoryValid('')
        if(p.access===''){
            p.setAccessValid('error')
        }
        else
            p.setAccessValid('')
        if(p.year===''){
                p.setYearValid('error')
        }
        else
            p.setYearValid('')
        if(p.category===''||p.access===''||p.year==='')
            return
        const formData = new FormData();
        formData.set('category',p.category)
        formData.set('subject',p.subject)
        formData.set('year',p.year)
        formData.set('access',p.access)
        formData.set('keys',p.keys)
        formData.set('details',p.details)
        formData.set('school',p.school)
        p.fileList.forEach((file) => {
            formData.append('file', file);
        })
        p.cover.forEach((file) => {
            formData.append('cover', file);
        })
        p.setUploading(true)
        axios.post('http://127.0.0.1:3007/receiver/upload',formData).then(response=>{
            if(response.data.status===1)navigate('/upload/error')
            else if(response.data.status===0)
            {
                navigate('/upload/success')
            }
            else if(response.data.status===2){
                if(localStorage.getItem('token')){
                    message.warning('登录失效，请重新登录')
                    localStorage.removeItem('token')
                    localStorage.removeItem('avatar')
                    localStorage.removeItem('school')
                    localStorage.removeItem('cash')
                    localStorage.removeItem('vip')
                    localStorage.removeItem('name')
                    localStorage.removeItem('gender')
                    localStorage.removeItem('birthday')
                    localStorage.removeItem('region')
                    localStorage.removeItem('phone')
                    localStorage.removeItem('email')
                    localStorage.removeItem('address')
                    localStorage.removeItem('identity')
                    localStorage.removeItem('period')
                    localStorage.removeItem('grade')
                  }
                  else
                    message.warning('请登录')
                navigate('/login')
            }
            
        }).catch((err)=>{message.error('网络错误')}).finally(()=>{p.setUploading(false)})
    }
    return (
        <Button
            size='large'
            type="primary"
            onClick={handleUpload}
            disabled={p.fileList.length === 0}
            loading={p.uploading}
            style={{width: '978px'}}
        >
            {p.uploading ? '上传中' : '上传'}
        </Button>
    )
}
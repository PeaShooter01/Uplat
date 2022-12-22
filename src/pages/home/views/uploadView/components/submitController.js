import { Upload, Button } from "antd"
import { UploadOutlined } from "@ant-design/icons";


export default function SubmitController(p) {
    const props = {
        onRemove: (file) => {
            const index = p.fileList.indexOf(file);
            const newFileList = p.fileList.slice();
            newFileList.splice(index, 1);
            p.setFileList(newFileList);
        },
        beforeUpload: (file) => {
            p.setFileList([...p.fileList, file]);
            return false;
        },
        fileList:p.fileList,
        directory:true
    };
    return (
            <Upload {...props}>
                <Button icon={<UploadOutlined />} style={{width:'485px',height:'50px'}}>请上传文件（上传多个文件自动打包）</Button>
            </Upload>
    );
}
import { PictureOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
import React from 'react';

export default function CoverInput(p) {
    const props = {
        onRemove: (file) => {
            const index = p.cover.indexOf(file);
            const newFileList = p.cover.slice();
            newFileList.splice(index, 1);
            p.setCover(newFileList);
        },
        beforeUpload: (file) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJpgOrPng) {
                message.error('仅支持JPG/PNG格式文件');
            }
            else if (!isLt2M) {
                message.error('文件大小不能超过2MB');
            }
            else
                p.setCover([file]);
            return false;
        },
        fileList: p.cover,
        listType:'picture'
    }
    return (
        <Upload {...props}>
            <Button icon={<PictureOutlined />} style={{ width: '485px', height: '50px' }}>请上传封面（不上传即使用默认封面）</Button>
        </Upload>
    );
};
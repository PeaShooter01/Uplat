import { PageHeader, Row, Space} from 'antd';
import CategorySelect from './components/categorySelect';
import  SubjectInput from './components/subjectInput';
import YearSelect from './components/yearSelect';
import  AccessSelect from './components/accessSelect';
import KeySelect from './components/keySelect';
import DetailsInput from './components/detailsInput';
import SubmitController from './components/submitController';
import SubmitButton from './components/submitButton';
import SchoolInput from './components/schoolInput';
import CoverInput from './components/coverInput';
import { useState } from 'react';

export default function UploadView() {
    const [uploading, setUploading] = useState(false)
    const [fileList, setFileList] = useState([])
    const [cover, setCover] = useState([])
    const [category,setCategory]=useState('')
    const [subject,setSubject]=useState('')
    const [year,setYear]=useState('')
    const [access,setAccess]=useState('')
    const [keys,setKeys]=useState([])
    const [details,setDetails]=useState('')
    const [school,setSchool]=useState('')
    const [categoryValid,setCategoryValid]=useState(true)
    const [accessValid,setAccessValid]=useState(true)
    const [yearValid,setYearValid]=useState(true)
    return (
        <Space direction="vertical" size='large' style={{ display: 'flex' }}>
            <Row>
                <PageHeader title="上传" />
            </Row>
            <Row justify='center'>
                <Space>
                    <CoverInput cover={cover} setCover={setCover}/>
                    <SubmitController fileList={fileList} setFileList={setFileList}/>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <CategorySelect setCategory={setCategory} categoryValid={categoryValid}/>
                    <AccessSelect setAccess={setAccess} accessValid={accessValid}/>
                    <YearSelect setYear={setYear} yearValid={yearValid}/>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <SubjectInput setSubject={setSubject}/>
                    <SchoolInput setSchool={setSchool}/>
                    <div style={{width:'320px'}}/>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <KeySelect setKeys={setKeys}/>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                   <DetailsInput setDetails={setDetails}/> 
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                <SubmitButton
                uploading={uploading} 
                setUploading={setUploading} 
                fileList={fileList} 
                cover={cover}
                category={category}
                subject={subject}
                year={year}
                access={access}
                keys={keys}
                details={details}
                school={school}
                setCategoryValid={setCategoryValid}
                setAccessValid={setAccessValid}
                setYearValid={setYearValid}
                />
                </Space>
            </Row>
        </Space>
    )
}
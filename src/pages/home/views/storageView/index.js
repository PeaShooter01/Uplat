import { PageHeader, Row, Space} from 'antd';
import CategorySelect from './components/categorySelect';
import  SubjectInput from './components/subjectInput';
import YearSelect from './components/yearSelect';
import KeySelect from './components/keySelect';
import StorageTable from './components/storageTable';
import SchoolInput from './components/schoolInput';
import { useState } from 'react';

export default function StorageView (){
    const [category,setCategory]=useState('')
    const [subject,setSubject]=useState('')
    const [year,setYear]=useState('')
    const [school,setSchool]=useState('')
    const [keys,setKeys]=useState([])
    return(
        <Space direction="vertical" size='large' style={{ display: 'flex' }}>
            <Row>
                <PageHeader title="资料库" />
            </Row>
            <Row justify='center'>
                <Space>
                    <img style={{ width:'1000px',height:'90px'}} src="http://localhost:3000/headbar2_.png" alt=''/>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <div style={{width:'45px'}}>种类：</div>
                    <CategorySelect setCategory={setCategory} />
                    <div style={{width:'30px'}}/>
                    <div style={{width:'45px'}}>年份：</div>
                    <YearSelect setYear={setYear} />
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <div style={{width:'45px'}}>科目：</div>
                    <SubjectInput setSubject={setSubject}/>
                    <div style={{width:'30px'}}/>
                    <div style={{width:'45px'}}>学校或机构：</div>
                    <SchoolInput setSchool={setSchool}/>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <KeySelect setKeys={setKeys}/>
                </Space>
            </Row>
            <Row justify='center'>
                <Space>
                    <StorageTable
                    category={category}
                    subject={subject}
                    year={year}
                    school={school}
                    keys={keys}
                    />
                </Space>
            </Row>
        </Space>
    )
}
import { Row, Space} from 'antd';
import CarouselControllerOne from './components/carouselControllerOne';
import CarouselControllerTwo from './components/carouselControllerTwo';
import VerticalMenu from './components/verticalMenu';
import SuggestTable from './components/suggestTable';
import axios from 'axios'
import { useState } from 'react';

export default function SearchView() {
    const [suggest,setSuggest] = useState()
    if(!suggest){
    axios.get('http://127.0.0.1:3007/storage/suggest').then(response=>{
        if(response.data.status===0)
            setSuggest(response.data.content)
    })}
    return (
        <Space direction="vertical" size='large' style={{ display: 'flex' }}>
            <Row />
            <Row justify='center'>
                <Space>
                    <img style={{ width:'1140px',height:'60px'}} src="http://localhost:3000/headbar1_.png" alt=''/>
                </Space>
            </Row>
            <Row justify='center'>
              <Space direction='horizontal' align='center'>
                    <VerticalMenu />
                    <CarouselControllerOne/>
                    <CarouselControllerTwo/>
                </Space>
            </Row>
            <Row />
            <Row justify='center'>
              <Space>
                  <SuggestTable title={()=>'资料分类1'} data={suggest}/>
                </Space>
            </Row>
        </Space>
    )
}
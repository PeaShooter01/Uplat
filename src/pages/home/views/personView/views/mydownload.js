import { Table ,Tag} from "antd"
import axios from "axios";
import { useState,useEffect } from "react";

  const columns = [
    {
      title: '资料名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
        title: '上传日期',
        dataIndex: 'date',
        key: 'date',
      },
    {
      title: '上传者',
      dataIndex: 'contributor',
      key: 'contributor',
    },
    {
      title: '关键词',
      key: 'keys',
      dataIndex: 'keys',
      render: (_, { keys }) => (
        <>
          {keys.map((val) => {
            return (
              <Tag color='orange' key={val}>
                {val}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
        title: '分类',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: '下载量',
        dataIndex: 'download',
        key: 'download',
      },
    {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = 'geekblue';
              if (tag === '热') {
                color = 'red';
              }
              else if(tag === '新') {
                color = 'cyan';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </>
        ),
      },
]

export default function MyDownLoad(props) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({current: 1,pageSize: 10,showSizeChanger:false,position:['top']});
  useEffect(() => {fetchData()},[JSON.stringify(tableParams),props])
  const fetchData = () => {
    setLoading(true)
    axios.post('http://127.0.0.1:3007/storage/update',{
      current:tableParams.current,
      number:10,
      category:props.category,
      year:props.year,
      subject:props.subject,
      school:props.school,
      keys:props.keys
    }).then(res=>{
      setData(res.data.content)
      setLoading(false)
      setTableParams({...tableParams,total:res.data.total})
    })
  }
  const handleTableChange = (pagination) => {
    setTableParams(pagination)
  };
    return (
      <Table
      style={{width:'978px'}}
      columns={columns}
      dataSource={data}
      pagination={tableParams}
      loading={loading}
      onChange={handleTableChange}
    />
    )
}
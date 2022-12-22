import { Table ,Tag } from "antd"
import { Link } from "react-router-dom";

  const columns = [
    {
      title: '资料名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Link>{text}</Link>,
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


export default function SuggestTable(props) {
    return (
        <Table columns={columns} dataSource={props.data} pagination={false} title={props.title} style={{width:'1115px'}}/>
    )
}
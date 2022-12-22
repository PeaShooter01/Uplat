import { Space, Input, Select, Row, DatePicker, Button, PageHeader ,Cascader} from 'antd';

const { Option } = Select

const options = [
  {
    value: '陕西省',
    label: '陕西省',
    children: [
      {
        value: '西安市',
        label: '西安市',
        children: [
          {
            value: '碑林区',
            label: '碑林区',
          },
        ],
      },
    ],
  },
];

const Information = () => {
  return (
    <Space direction='vertical' size='large' style={{ display: 'flex' }}>
      <Row>
        <PageHeader title='基本信息：' />
      </Row>
      <Row justify='center'>
        <Space>
          <div style={{ width: '45px' }}>姓名：</div>
          <Input style={{ width: '400px' }} placeholder={localStorage.getItem('name')}/>
          <Button type="primary">修改</Button>
        </Space>
      </Row>
      <Row justify='center'>
        <Space>
          <div style={{ width: '45px' }}>性别：</div>
          <Select style={{ width: '130px' }} placeholder={localStorage.getItem('gender')} allowClear>
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
          <Button type="primary">修改</Button>
          <div style={{ width: '10px' }} />
          <div style={{ width: '45px' }}>生日：</div>
          <DatePicker style={{ width: '130px' }} placeholder={localStorage.getItem('birthday')}/>
          <Button type="primary">修改</Button>
        </Space>
      </Row>
      <Row justify='center'>
        <Space>
          <div style={{ width: '45px' }}>地区：</div>
          <Cascader options={options} expandTrigger="hover" style={{ width: '400px' }} placeholder={localStorage.getItem('address')}/>
          <Button type="primary">修改</Button>
        </Space>
      </Row>
      <Row justify='center'>
        <Space>
          <div style={{ width: '45px' }}>手机：</div>
          <Input style={{ width: '400px' }} placeholder={localStorage.getItem('phone')}/>
          <Button type="primary">修改</Button>
        </Space>
      </Row>
      <Row justify='center'>
        <Space>
          <div style={{ width: '45px' }}>邮箱：</div>
          <Input style={{ width: '400px' }}  placeholder={localStorage.getItem('email')}/>
          <Button type="primary">修改</Button>
        </Space>
      </Row>
      <Row justify='center'>
        <Space>
          <div style={{ width: '45px' }}>地址：</div>
          <Input style={{ width: '400px' }} placeholder={localStorage.getItem('address')}/>
          <Button type="primary">修改</Button>
        </Space>
      </Row>
      <Row>
        <PageHeader title='基本信息：' />
      </Row>
      <Row justify='center'>
        <Space>
          <div style={{ width: '45px' }}>身份：</div>
          <Select style={{ width: '130px' }} placeholder={localStorage.getItem('identity')} allowClear>
            <Option value="学生">学生</Option>
            <Option value="教师">教师</Option>
            <Option value="家长">家长</Option>
            <Option value="其他">其他</Option>
          </Select>
          <Button type="primary">修改</Button>
          <div style={{ width: '10px' }} />
          <div style={{ width: '45px' }}>学段：</div>
          <Select style={{ width: '130px' }} placeholder={localStorage.getItem('period')} allowClear>
            <Option value="本科">本科</Option>
            <Option value="硕士">硕士</Option>
            <Option value="博士">博士</Option>
            <Option value="其他">其他</Option>
          </Select>
          <Button type="primary">修改</Button>
        </Space>
      </Row>
      <Row justify='center'>
        <Space>
          <div style={{ width: '45px' }}>年级：</div>
          <Select style={{ width: '130px' }} placeholder={localStorage.getItem('grade')} allowClear>
            <Option value="大一">大一</Option>
            <Option value="大二">大二</Option>
            <Option value="大三">大三</Option>
            <Option value="大四">大四</Option>
            <Option value="其他">其他</Option>
          </Select>
          <Button type="primary">修改</Button>
          <div style={{ width: '273px' }} />
        </Space>
      </Row>
      <Row justify='center'>
        <Space>
          <div style={{ width: '45px' }}>学校：</div>
          <Input style={{ width: '400px' }} placeholder={localStorage.getItem('school')}/>
          <Button type="primary">修改</Button>
        </Space>
      </Row>
    </Space>
  );
};
export default Information;
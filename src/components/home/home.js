import './home.scss';
import { Card, Space } from 'antd';
import { Tabs } from 'antd';

import { Typography } from 'antd';
import Conversations from '../Conversations/conversations';
import Newuser from '../Newuser/newuser';
import Uploader from '../Uploader/uploader';

const { Title } = Typography;

const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: `Conversation`,
        children: <Conversations />,
    },
    {
        key: '2',
        label: `Files`,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: `Notes`,
        children: `Content of Tab Pane 3`,
    },
];

function Home() {
    return (
        <div className="app-container">
            <div className='container'>
                <Title>Welcome!</Title>
                <div className='row'>
                    <div className='col-6'>
                        <Card className='home-card'>
                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                        </Card>
                    </div>
                    <div className='col-6'>
                        <Space direction="vertical" size={24}>
                            <Newuser />
                            <Uploader />
                        </Space>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

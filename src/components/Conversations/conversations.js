import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Pagination, Space } from 'antd';


import './conversations.scss';
const { Meta } = Card;

const conversations = [
    {
        key: '1',
        name: 'Alma Andrews',
        avatar: 'avatar-1',
        intro: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`,
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
        likes: 61,
        stars: 81
    },
    {
        key: '2',
        name: 'Nelson Richards',
        avatar: 'avatar-2',
        intro: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`,
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
        likes: 36,
        stars: 11
    },
    {
        key: '2',
        name: 'Stella Reid',
        avatar: 'avatar-3',
        intro: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`,
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
        likes: 61,
        stars: 81
    },
];


function Conversations() {
    return (
        <div>
            {
                Object.values(conversations).map((conversations, index) => {
                    return (
                        <Card key={index} className="convo-card">
                            <Meta
                                avatar={<Avatar src={`img/avatars/${conversations.avatar}.jpg`} />}
                                title={conversations.name}
                                description={conversations.intro}
                            />
                            <div className='convo-card-contents'>
                                <p>{conversations.description}</p>
                                <div className='convo-card-actions'>
                                    <Button className='convo-card-reply'>Reply</Button>
                                    <div className='convo-card-actions-right'>
                                        <Button type="text" icon={<LikeOutlined />}><span>{conversations.likes}</span></Button>
                                        <Divider type="vertical" />
                                        <Button type="text" icon={<StarOutlined />}><span>{conversations.stars}</span></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })
            }
            <Pagination defaultCurrent={2} total={50} className='convo-pagination' />
        </div>
    );
}

export default Conversations;

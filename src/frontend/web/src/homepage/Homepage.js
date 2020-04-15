import React from 'react';
import { Button, Card } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';

import './homepage.scss';

const Homepage = () => {
    const chooseRandomImage = () => (Math.floor(Math.random() * 2) === 0 ? '/images/male-stud.png' : '/images/female-stud.png');

    return (
        <div className="homepage-container">
            <div className="partner-request">
                <Button type="primary" className="find-a-partner-button">
                    אני רוצה למצוא שותף!
                    <UsergroupAddOutlined />
                </Button>
                <img src={chooseRandomImage()} alt="Students" className="find-mate-image" />
            </div>
        </div>
    );
};

export default Homepage;

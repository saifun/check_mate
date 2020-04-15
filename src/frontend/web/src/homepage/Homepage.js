import React from "react";
import { Card } from 'antd';
import {UsergroupAddOutlined} from '@ant-design/icons';

import './homepage.scss';

const Homepage = () => {
    const chooseRandomImage = () =>
        Math.floor(Math.random() * 2) === 0 ? '/images/male-stud.png' : '/images/female-stud.png' ;

    return (
        <div className="homepage-container">
            <div className="data-container">
                <img src={chooseRandomImage()} alt="Students" className="find-mate-image" />
                <Card className="user-options-card">
                    אני רוצה למצוא שותף! <UsergroupAddOutlined />
                </Card>
            </div>
        </div>
    );
};

export default Homepage;

import React from "react";
import { Card } from 'antd';
import {UsergroupAddOutlined} from '@ant-design/icons';

import './homepage.scss';

const Homepage = () => {
    return (<div className="homepage-container">
        <div className="data-container">
            <Card className="user-options-card">
                אני רוצה למצוא שותף! <UsergroupAddOutlined />
            </Card>
        </div>
    </div>);
};

export default Homepage;
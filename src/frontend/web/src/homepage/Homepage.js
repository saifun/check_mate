import React, { useContext } from 'react';
import { Button } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import _ from 'lodash';

import './homepage.scss';
import { UserStoreContext } from '../user/UserStore';

const Homepage = () => {
    const chooseRandomImage = () => (Math.floor(Math.random() * 2) === 0 ? '/images/male-stud.png' : '/images/female-stud.png');
    const { userMatches, userCourses } = useContext(UserStoreContext);

    return (
        <div className="homepage-container">
            <div className="partner-request">
                <Button type="primary" className="find-a-partner-button">
                    אני רוצה למצוא שותף!
                    <UsergroupAddOutlined />
                </Button>
                <img src={chooseRandomImage()} alt="Students" className="find-mate-image" />
            </div>
            <div className="homepage-courses">
                {_.map(userCourses, (course) => <p>{course}</p>)}
            </div>
            <div className="all-matches">
                {_.map(userMatches, (match) => <p>{match}</p>)}
            </div>
        </div>
    );
};

export default Homepage;

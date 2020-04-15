import React, { useContext } from 'react';
import { Button, Drawer } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import _ from 'lodash';
import useToggle from 'react-use-toggle';

import './homepage.scss';
import { UserStoreContext } from '../user/UserStore';
import AddCourseForm from './AddCourseForm';

const Homepage = () => {
    const chooseRandomImage = () => (Math.floor(Math.random() * 2) === 0 ? '/images/male-stud.png' : '/images/female-stud.png');
    const { userMatches, userCourses } = useContext(UserStoreContext);
    const [isCourseFormOpen, toggleCourseFormOpen] = useToggle(false);

    return (
        <div className="homepage-container">
            <div className="partner-request">
                <Button type="primary" className="find-a-partner-button" onClick={toggleCourseFormOpen}>
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
            <AddCourseForm isDrawerOpen={isCourseFormOpen} toggleDrawer={toggleCourseFormOpen} />
        </div>
    );
};

export default Homepage;

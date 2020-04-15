import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import getUserDetails from './actions';

const UserStore = ({ children }) => {
    const [username, setUsername] = useState('');
    const [matches, setMatches] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const decapsulateUserDetails = async () => {
            const {
                data: {
                    username: name,
                    userMatches,
                    userCourses
                }
            } = await getUserDetails();
            setUsername(name);
            setMatches(userMatches);
            setCourses(userCourses);
        };
        decapsulateUserDetails();
    }, []);

    return (
        <UserStoreContext.Provider
            value={{
                username,
                matches,
                courses
            }}>
            {username && children}
        </UserStoreContext.Provider>
    );
};

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

UserStore.propTypes = propTypes;
export default UserStore;

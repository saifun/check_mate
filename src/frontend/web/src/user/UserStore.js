import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getUserDetails } from './actions';

export const UserStoreContext = React.createContext({});

const UserStore = ({ children }) => {
    const [username, setUsername] = useState('');
    const [userMatches, setMatches] = useState([]);
    const [userCourses, setCourses] = useState([]);

    useEffect(() => {
        const decapsulateUserDetails = async () => {
            const {
                data: {
                    username: name,
                    matches,
                    courses
                }
            } = await getUserDetails('johndoe');
            console.log(name, matches, courses);
            setUsername(name);
            setMatches(matches);
            setCourses(courses);
        };
        decapsulateUserDetails();
    }, []);

    return (
        <UserStoreContext.Provider
            value={{
                username,
                userMatches,
                userCourses
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

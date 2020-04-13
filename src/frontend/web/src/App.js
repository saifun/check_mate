import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router';
import { Link, Redirect, Route } from 'react-router-dom';
import propTypes from 'prop-types';

import './App.scss';
import 'antd/dist/antd.css';
import Homepage from './homepage/Homepage';

const { Header, Content } = Layout;

function App({ history }) {
    const redirectNotLoggedIn = () => {
        history.push('/login');
    };

    return (
        <Layout>
            <Header className="checkmate-navbar">
                <Link to="/homepage" className="checkmate-logo">
                    <div>CheckMate</div>
                </Link>
            </Header>
            <Content>
                <Route exact path="/" render={() => <Redirect to="/homepage" />} />
                <Route exact path="/homepage" component={Homepage} />
            </Content>
        </Layout>
    );
}

App.propTypes = {
    history: {
        push: propTypes.func,
        location: {
            pathname: propTypes.string
        }
    }.isRequired
};

export default withRouter(App);

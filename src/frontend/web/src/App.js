import React from 'react';
import {Layout} from 'antd';
import {withRouter} from 'react-router';
import {Link, Redirect, Route} from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';
import Homepage from './homepage/Homepage';
import Ratingpage from './ratingpage/Ratingpage';

const {Header, Content} = Layout;

function App() {
    return (
        <Layout>
            <Header className="checkmate-navbar">
                <Link to="/homepage" className="checkmate-logo">
                    <div>CheckMate</div>
                </Link>
            </Header>
            <Content>
                <Route exact path="/" render={() => <Redirect to="/homepage"/>}/>
                <Route exact path="/homepage" component={Homepage}/>
                <Route exact path="/ratingpage" component={Ratingpage}/>
            </Content>
        </Layout>
    );
}

export default withRouter(App);

import React, { Component } from "react";
import "./MatchPage.css";
import MatcheInfo from "./MatchInfo";
import Buttons from "./buttons";
import {Layout } from 'antd';


const MatchPage = () => {

  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div dir="rtl" >
       <Header ><h1 className="match-billboard">You have a match!!!</h1></Header>
      <Content className="container-0">
        <MatcheInfo/>
        </Content>
      <Footer className="myfooter" ><Buttons/></Footer>
    </div>
  );
};

export default MatchPage;

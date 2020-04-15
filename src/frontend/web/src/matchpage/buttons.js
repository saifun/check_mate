import React, { Component, useState } from "react";
import "./MatchPage.css";
import { Popconfirm, Button, Tooltip, Row, Col} from "antd";
import {
  ExclamationCircleOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";

const Buttons = () => {
  const deleteMatche = "?בטוח רוצה להמשיך לחפש";
  const confirmMatche = "?בטוח הסתדרתם ואתה רוצה למחוק את הבקשה";

  const deleteWasClicked = () => History.push("/homepage");

  const confirmWasClicked = () => alert("delete");

  const reportWasClicked = () => alert("report");

  return (
    <div dir="rtl" className="container-2">
      <Row gutter={[120, 16]}>
      <Col span={8}>
      <Tooltip title="DONE!">
        <Popconfirm
          placement="top"
          title={confirmMatche}
          okText="כן"
          cancelText="לא"
          onConfirm={confirmWasClicked}
        >
          <Button
            className="button-done"
            shape="circle"
            icon={<CheckOutlined />}
          />
        </Popconfirm>
      </Tooltip>
      </Col>
      <Col span={8} >
      <Tooltip title="Cancel Match :(">
        
          <Popconfirm
            placement="top"
            title={deleteMatche}
            okText="כן"
            cancelText="לא"
            onConfirm={deleteWasClicked}
          >
            <Button
              className="button-cancel"
              shape="circle"
              icon={<CloseOutlined />}
            />
          </Popconfirm>
     
      </Tooltip>
      </Col>
      <Col span={8}>
      <Tooltip title="Report">
        <Button
          className="button-report"
          shape="circle"
          icon={<ExclamationCircleOutlined />}
        />
      </Tooltip>
      </Col>
    </Row>
    </div>
    
  );
};

export default Buttons;

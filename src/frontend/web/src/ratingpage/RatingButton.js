import React from "react";
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import './RatingButton.scss';

const RatingButton = ( { className, icon, onClick, flashFunc } ) => {
  const onClickHandler = () => {
    flashFunc();
    // Wait until the flash animation disappears.
    setTimeout(() => {onClick()}, 900);
  };

  var iconSelector = (icon === 'DislikeOutlined') ?
   <DislikeOutlined style={{ fontSize: '7vh' }}/> :
   <LikeOutlined style={{ fontSize: '7vh' }}/>;

  return (
    <Button className={className} onClick={onClickHandler} type='primary'
     shape='circle'size='large'>
      {iconSelector}
    </Button>
  );
};

RatingButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    flashFunc: PropTypes.func
};

export default RatingButton;

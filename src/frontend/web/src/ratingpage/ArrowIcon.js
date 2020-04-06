import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { RightSquareTwoTone, LeftSquareTwoTone } from '@ant-design/icons';
import './ArrowIcon.scss'

const ArrowIcon = ({icon, tooltipTitle}) => {

  var iconSelector = (icon === 'RightSquareTwoTone') ?
  <RightSquareTwoTone style={{ fontSize: '2.5vh' }}/> :
  <LeftSquareTwoTone style={{ fontSize: '2.5vh' }}/>;

  return (
    <Tooltip placement='top' title={tooltipTitle} overlayStyle={{direction: 'rtl'}}>
      <div className='single-arrow-wrapper'>
        {iconSelector}
      </div>
    </Tooltip>
  );
}

ArrowIcon.propTypes = {
  icon: PropTypes.string,
  tooltipTitle: PropTypes.string
};

export default ArrowIcon;

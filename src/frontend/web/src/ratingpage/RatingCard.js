import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';

import 'antd/dist/antd.css';
import './RatingCard.scss';
import EffortBar from '../components/EffortBar';

const RatingCard = (currentUser) => {

  const {about, age, effort, faculty, img_src, name, semester,
     times, work_partition} = currentUser;

  return (
    <Card className='rating-card' >
      <div dir='rtl'>
        <Avatar src={img_src} style={{width: '18vh', height: '18vh' }}/>
        <h1 className='card-name'> <b>{name}, {age}</b> </h1>
        <h3 className='card-semester'>
        סמסטר {semester} ב{faculty}
        </h3>
        <p className='card-about'>{about}</p>
        <div className='card-separator'></div>
        <EffortBar effort={effort}/>
        <p className='card-small-text'>מידת השקעה</p>
        <div>
        {times && (times).map((time, index) =>
        <h4 className='card-time' key={index}>{time}</h4>)}
        </div>
        <p className='card-small-text'>שעות עבודה משותפות</p>
        <h3 className='card-work-division'>{work_partition}</h3>
        <p className='card-small-text'>שיטת עבודה</p>
      </div>
    </Card>
  )
}

RatingCard.propTypes = {
  about: PropTypes.string,
  age: PropTypes.number,
  effort: PropTypes.number,
  facult: PropTypes.string,
  img_src: PropTypes.string,
  name: PropTypes.string,
  semester: PropTypes.number,
  times: PropTypes.array,
  work_partition: PropTypes.string
}

export default RatingCard;

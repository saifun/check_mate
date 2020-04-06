import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';

import 'antd/dist/antd.css';
import './RatingCard.scss';
import EffortBar from '../components/EffortBar';

const RatingCard = ({ about, age, effort, faculty, imgSrc, name, semester,
    times, workPartition }) => (
        <Card className="rating-card">
            <div dir="rtl">
                <Avatar src={imgSrc} style={{ width: '18vh', height: '18vh' }} />
                <h1 className="card-name">
                    <b>
                        {name}
                    ,&nbsp;
                        {age}
                    </b>
                </h1>
                <h3 className="card-semester">
                   סמסטר&nbsp;
                    {semester}
                   &nbsp;ב
                    {faculty}
                </h3>
                <p className="card-about">{about}</p>
                <div className="card-separator" />
                <EffortBar effort={effort} />
                <p className="card-small-text">מידת השקעה</p>
                <div>
                    {times && (times).map((time, index) => <h4 className="card-time" key={index}>{time}</h4>)}
                </div>
                <p className="card-small-text">שעות עבודה משותפות</p>
                <h3 className="card-work-division">{workPartition}</h3>
                <p className="card-small-text">שיטת עבודה</p>
            </div>
        </Card>
);

RatingCard.propTypes = {
    about: PropTypes.string,
    age: PropTypes.number,
    effort: PropTypes.number,
    faculty: PropTypes.string,
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    semester: PropTypes.number,
    times: PropTypes.array,
    workPartition: PropTypes.string
};

RatingCard.defaultProps = {
    about: null,
    age: 0,
    effort: 0,
    faculty: null,
    imgSrc: null,
    name: null,
    semester: 0,
    times: null,
    workPartition: null
};

export default RatingCard;

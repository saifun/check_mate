import React, { Component } from 'react';
import { Card } from 'antd';

import 'antd/dist/antd.css';
import './RatingCard.css';
import EffortBar from './EffortBar';

class RatingCard extends Component {
  constructor(){
    super();
    this.state = {
      name: 'אביב צנזור',
      img_src: require('./censor-profile.png'),
      age: 46,
      semester: 7,
      faculty: "מתמטיקה",
      about: ['מלמד מתמטיקה, חובב כלבים וריצות ארוכות. ',
              'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג',
              'לית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ.',
              ' עמחליף קולורס מונפרד צוט ומעיוט - לפתיעם ברשג.'].join(' '),
      times: ["יום א' 20:00-22:00",
              "יום ב' 20:00-22:00"],
      effort_level: 3,
      work_division: 'עובדים ביחד'
    };
  };

  render (){
    return (
      <Card className='rating-card'>
        <div dir='rtl'>
          <img id='card-img' src={this.state.img_src}/>
          <h1 id='card-name'> <b>{this.state.name}, {this.state.age}</b> </h1>
          <h3 id='card-semester'>
          סמסטר {this.state.semester} ב{this.state.faculty}
          </h3>
          <p id='card-about'>{this.state.about}</p>
          <div className='card-separator'></div>
          <EffortBar effort={this.state.effort_level}/>
          <p className='card-small-text'>מידת השקעה</p>
          <div>
            {(this.state.times).map((time, index) =>
            <h4 className='card-time' key={index}>{time}</h4>)}
          </div>
          <p className='card-small-text'>שעות עבודה משותפות</p>
          <h3 id='card-work-division'>{this.state.work_division}</h3>
          <p className='card-small-text'>שיטת עבודה</p>
        </div>
      </Card>
    );
  };
}

export default RatingCard;

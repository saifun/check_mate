import React from "react";
import PropTypes from 'prop-types';
import './EffortBar.scss';

const EffortBar = ({effort}) => {

    const max_effort = 5;
    const full_elements = [];
    const empty_elements = [];

    for(let i = 0; i < max_effort; i = i + 1){
      if(i < Number(effort)){
        full_elements.push(<div className='full-bar-element' key={i}></div>)
      } else {
        empty_elements.push(<div className='empty-bar-element' key={i}></div>)
      }
    }

    return (
      <div className='bar'>
        {empty_elements}
        {full_elements}
      </div>
    );
};

EffortBar.propTypes = {
    effort: PropTypes.number
};

export default EffortBar;

import React from "react";
import './EffortBar.css';

const EffortBar = (props) => {

    const max_effort = 5;
    const full_elements = [];
    const empty_elements = [];

    for(let i = 0; i < max_effort; i = i + 1){
      if(i < Number(props.effort)){
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

export default EffortBar;

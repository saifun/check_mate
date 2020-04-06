import React from "react";
import PropTypes from 'prop-types';
import './FlashAnimation.scss';

const FlashAnimation = ( { flashClass, isVisible } ) => {

  var text = (flashClass === 'flash-dislike') ? 'פחות' : 'אהבתי!';

  return (
      <div className={'flash-wrapper ' + flashClass}>
        <div className={`hidden-content${isVisible?
           ' visible-content' : ''}`}>
          <div dir='rtl' className={'flash-content ' + flashClass}>
           {text}
          </div>
        </div>
      </div>
  );
};

FlashAnimation.propTypes = {
  flashClass: PropTypes.string,
  isVisible: PropTypes.bool
};

export default FlashAnimation;

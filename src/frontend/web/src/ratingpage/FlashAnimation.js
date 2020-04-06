import React from 'react';
import PropTypes from 'prop-types';
import './FlashAnimation.scss';

const FlashAnimation = ({ flashClass, isVisible }) => {
    const text = (flashClass === 'flash-dislike') ? 'פחות' : 'אהבתי!';

    return (
        <div className={`flash-wrapper ${flashClass}`}>
            <div className={`hidden-content${isVisible
                ? ' visible-content' : ''}`}>
                <div dir="rtl" className={`flash-content ${flashClass}`}>
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

FlashAnimation.defaultProps = {
    flashClass: null,
    isVisible: false
};

export default FlashAnimation;

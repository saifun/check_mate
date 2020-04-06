import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Layout from 'antd/lib/layout';

import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RatingPage.scss';
import RatingCard from './RatingCard';
import RatingButton from './RatingButton';
import FlashAnimation from './FlashAnimation';
import ArrowIcon from './ArrowIcon';

const leftArrow = 'ArrowLeft';
const rightArrow = 'ArrowRight';
export const getUserDetails = () => axios.get('/api/user/get_data');

const RatingPage = () => {
    const [visibleLike, setVisibleLike] = useState(false);
    const [visibleDislike, setVisibleDisike] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const flashDislike = () => {
        setVisibleDisike(true);
        setTimeout(() => {
            setVisibleDisike(false);
        }, 450);
    };

    const flashLike = () => {
        setVisibleLike(true);
        setTimeout(() => {
            setVisibleLike(false);
        }, 450);
    };

    // Settings for Slick's carousel.
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        accessibility: false,
        nextArrow: <RatingButton icon="DislikeOutlined" flashFunc={flashDislike} />,
        prevArrow: <RatingButton icon="LikeOutlined" flashFunc={flashLike} />
    };

    const onKeyDown = (event) => {
        if (event.key === leftArrow) {
            document.getElementsByClassName('slick-arrow slick-next')[0].click();
        }

        if (event.key === rightArrow) {
            document.getElementsByClassName('slick-arrow slick-prev')[0].click();
        }
    };

    useEffect(() => {
        getUserDetails().then((result) => {
            setCurrentUser(result.data);
        });

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return (
        <Layout style={{ height: 'calc(100vh - 64px)', textAlign: 'center' }}>
            <div className="rating-wrapper" dir="rtl">
                <div className="slider-wrapper">
                    <Slider {...settings}>
                        <RatingCard {...currentUser} />
                        <RatingCard {...currentUser} />
                    </Slider>
                </div>

                <FlashAnimation flashClass="flash-like" isVisible={visibleLike} />
                <FlashAnimation flashClass="flash-dislike" isVisible={visibleDislike} />

                <div className="arrows-wrapper">
                    <ArrowIcon
                        icon="RightSquareTwoTone"
                        tooltipTitle='לחצו על החץ הימני במקלדת בשביל "אהבתי"' />
                    <ArrowIcon
                        icon="LeftSquareTwoTone"
                        tooltipTitle='לחצו על החץ השמאלי במקלדת בשביל "פחות אהבתי"' />
                </div>
            </div>
        </Layout>
    );
};

// No PropTypes since this components has no props.

export default RatingPage;

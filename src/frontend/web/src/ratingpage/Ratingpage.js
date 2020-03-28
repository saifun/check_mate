import React, { Component } from 'react';
import Slider from "react-slick";
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import { LikeTwoTone, DislikeTwoTone, DislikeOutlined,
        LikeOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Ratingpage.scss';
import RatingCard from './RatingCard';

class Ratingpage extends Component {
  constructor(props) {
    super(props);
    this.likeCard = this.likeCard.bind(this);
    this.dislikeCard = this.dislikeCard.bind(this);

    this.state = {
      visible_like: false,
      visible_dislike: false
    };
  };

  likeCard() {
    this.flashLike();
    // Wait until the flash animation disapears.
    setTimeout(() => {this.slider.slickPrev()} , 900);
  };

  dislikeCard() {
    this.flashDislike();
    // Wait until the flash animation disapears.
    setTimeout(() => {this.slider.slickNext()}, 900);
  };

  onKeyDown = (event) => {
      if(event.key === 'ArrowLeft'){
        this.dislikeCard();
      };

      if(event.key === 'ArrowRight') {
        this.likeCard();
      };
  };

  componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
  };

  componentWillUnmount(){
    document.removeEventListener('keydown',this.onKeyDown);
  };

  flashLike = () => {
    this.setState({ visible_like: true });
    setTimeout(() => {
      this.setState({ visible_like: false });
    }, 450);
  };

  flashDislike = () => {
    this.setState({ visible_dislike: true });
    setTimeout(() => {
      this.setState({ visible_dislike: false });
    }, 450);
  };

  render (){
    const settings = {
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: false
    };

    return (
      <Layout className='layout'>
        <div className='rating-wrapper' dir='rtl'>
          <div className='rating-center'>
            <div className='slider-wrapper'>
              <Slider ref={c => (this.slider = c)} {...settings}>
                <RatingCard />
                <RatingCard />
              </Slider>
            </div>

            <div className='button-section left-section' >
            <Button id='dislike-btn' onClick={this.dislikeCard} type='primary'
             shape='circle'size='large'>
              <DislikeOutlined style={{ fontSize: '7vh' }}/>
             </Button>
            </div>

            <div className='flash-wrapper left-section'>
              <div className={`hidden-content${this.state.visible_dislike ?
                 ' visible-content' : ''}`}>
                <div className='flash-content dislike-animation'>פחות</div>
              </div>
            </div>

            <div className='button-section right-section'>
            <Button id='like-btn' onClick={this.likeCard} type='primary'
             shape='circle'size='large'>
              <LikeOutlined style={{ fontSize: '7vh' }}/>
             </Button>
            </div>

            <div className='flash-wrapper right-section'>
              <div className={`hidden-content${this.state.visible_like ?
                 ' visible-content' : ''}`}>
                <div className='flash-content like-animation'>אהבתי!</div>
              </div>
            </div>

            {/* Arrows image taken from here:
              https://www.pngfuel.com/free-png/acyqi */}
            <div className='bottom-section'>
              <div className='arrows-wrapper'>
                <p className='small-bottom-text'>אפשר גם עם החיצים:</p>
                <div className='single-arrow-wrapper'>
                  <img className='arrow-img' src={require('./right-arrow.png')}/>
                  <p className='small-bottom-text'>פחות אהבתי</p>
                </div>
                <div className='single-arrow-wrapper'>
                  <img className='arrow-img' src={require('./left-arrow.png')}/>
                  <p className='small-bottom-text'>אהבתי</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Layout>
    );
  };
}

export default Ratingpage;

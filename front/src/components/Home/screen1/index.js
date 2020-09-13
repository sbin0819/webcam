import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scree1Warpper, ButtonWrapper, ImgWrapper } from '../styles';
import Illustrate1 from '../images/illu1.svg';

import VideoClip from './VideoClip';

const Screen1 = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Scree1Warpper>
        <div className='content'>
          <div className='title'>
            <h1>Distraction-free productivity</h1>
            <h2>Focusmate virtual coworking helps you get things done.</h2>
          </div>
          <ButtonWrapper>
            <Link className='btn' to='/signup'>
              Get started
            </Link>
            <div
              className='btn'
              onClick={() => {
                setVisible(!visible);
              }}
            >
              Watch a 30 second video
            </div>
            <VideoClip visible={visible} setVisible={setVisible} />
          </ButtonWrapper>
          <div style={{ marginTop: '20px' }}>
            <h5 style={{ color: '#c49969' }}>
              You'll get 3 sessions per week for free.
            </h5>
          </div>
          <ImgWrapper>
            <img src={Illustrate1} alt='main' />
          </ImgWrapper>
        </div>
      </Scree1Warpper>
    </>
  );
};

export default Screen1;

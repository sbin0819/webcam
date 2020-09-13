import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { HeaderContainer } from './styles';
import Modal from './modal';

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <HeaderContainer>
        <div className='col-1'>
          <span>
            <Link to='/'>Studymate</Link>
          </span>
        </div>
        <div className='col-2'>
          <span>
            <Link to='/signup'>SIGN UP</Link>
          </span>
          <span>
            <Link to='/guidelines'>GUIDELINES</Link>
          </span>
          <span>
            <Link to='/faq'>FAQ</Link>
          </span>
          <span>
            <Link to='/about'>ABOUT</Link>
          </span>
          <span>
            <Link to='/login'>LOG IN</Link>
          </span>
        </div>
        <div className='col-3'>
          <MenuOutlined onClick={() => setVisible(true)} />
        </div>
      </HeaderContainer>
      <Modal visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Header;

import React from 'react';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

const HeaderContainer = styled.div`
  margin: 10px;
  font-size: 28px;
  display: flex;
  align-content: center;
  .col-1 {
    width: 30%;
    span {
      cursor: pointer;
    }
  }
  .col-2 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 70%;
    span {
      margin-right: 25px;
      cursor: pointer;
    }
    @media (max-width: 900px) {
      span {
        display: none;
      }
    }
  }
  .col-3 {
    display: none;
    @media (max-width: 900px) {
      margin-right: 25px;
      display: block;
      span {
        cursor: pointer;
      }
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className='col-1'>
          <span>Studymate</span>
        </div>
        <div className='col-2'>
          <span>SIGN UP</span>
          <span>GUIDELINES</span>
          <span>FAQ</span>
          <span>ABOUT</span>
          <span>LOG IN</span>
        </div>
        <div className='col-3'>
          <MenuOutlined />
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;

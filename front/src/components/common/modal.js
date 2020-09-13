import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

const ModalInner = styled.div`
  .modal-header {
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    font-size: 30px;
    color: white;
    div {
      cursor: pointer;
    }
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
    a {
      display: inline-flex;
      text-transform: uppercase;
      justify-content: center;
      align-items: center;
      color: inherit;
      margin: 0 20px;
      width: 45vw;
      padding: 4px 16px;
      min-width: 200px;
      height: 50px;
      font-size: 18px;
      color: #c49969;
      :hover {
        border: 1px solid #c49969;
        cursor: pointer;
      }
    }
  }
`;

function Modal({ visible, setVisible }) {
  const onClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      {visible ? (
        <>
          <ModalWrapper>
            <ModalInner>
              <div className='modal-header'>
                <div onClick={onClick}>X</div>
              </div>
              <div className='menu'>
                <div onClick={onClick}>
                  <Link to='/'>home</Link>
                </div>
                <div onClick={onClick}>
                  <Link to='/signup'>sign up</Link>
                </div>
                <div onClick={onClick}>
                  <Link to='/guidelines'>guidelines</Link>
                </div>
                <div onClick={onClick}>
                  <Link to='/faq'>faq</Link>
                </div>
                <div onClick={onClick}>
                  <Link to='/about'>about</Link>
                </div>
                <div onClick={onClick}>
                  <Link to='/login'>log in</Link>
                </div>
              </div>
            </ModalInner>
          </ModalWrapper>
        </>
      ) : null}
    </>
  );
}

export default Modal;

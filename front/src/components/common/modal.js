import React from 'react';
import { Link } from 'react-router-dom';
import { ModalWrapper, ModalInner } from './styles';

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

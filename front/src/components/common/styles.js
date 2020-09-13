import styled from 'styled-components';

/* header */
export const HeaderContainer = styled.div`
  margin: 10px;
  font-size: 25px;
  display: flex;
  align-content: center;
  a {
    text-decoration: none;
  }
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

/* modal */

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const ModalInner = styled.div`
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

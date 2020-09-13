import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  .screen-1 {
    height: calc(100vh - 59.5px);
  }
  .screen-2 {
    height: 100vh;
    background: gold;
  }
`;

export const Scree1Warpper = styled.div`
  height: calc(100vh - 59.5px);
  text-align: center;
  .content {
    position: relative;
    top: 50px;
    background: #fcf9f7;
    margin: auto 40px;
  }
  .title {
    h1 {
      font-size: 38px;
      font-weight: 800;
      color: #4547a9;
      margin: 0;
    }
    h2 {
      color: #4547a9;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 300px;
    border-radius: 5px;
    margin: auto 10px;
    border: none;
    background: #c49969;
    color: white;
    cursor: pointer;
    :nth-child(2) {
      border: 1px solid #c49969;
      background: none;
      color: #c49969;
    }
  }
`;

export const ImgWrapper = styled.div`
  margin-top: 30px;
  img {
    width: 60%;
    height: 60%;
  }
`;

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
  margin: 18% auto;
  width: 60vw;
  height: 50vh;
  background: white;
`;

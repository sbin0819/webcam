import styled from 'styled-components';

export const TopButtonWrapper = styled.div`
  height: 50px;
  background: gold;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  div {
    flex: 1 1 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
      background: crimson;
    }
  }
`;

export const CameraWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  border: 2px solid #333;
`;

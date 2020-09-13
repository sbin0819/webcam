import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin: 10px;
  font-size: 28px;
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

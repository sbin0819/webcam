import styled from 'styled-components';

export const SignupWraaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  background: silver;
  .tabs {
    display: flex;
  }
  .title {
    text-align: center;
    h1 {
      font-size: 36px;
      color: rgba(69, 72, 170, 1);
    }
    h2 {
      color: rgba(69, 72, 170, 1);
      padding: 0;
      margin: 0;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: rgba(69, 72, 170, 1);
    input {
      width: 460px;
      height: 52px;
      margin: 12px;
      border-radius: 3px;
      padding: 5px 12px;
      border: 2px solid rgba(226, 204, 179, 1);
      text-align: left;
      font-weight: 500;
    }
    input[type='submit'] {
      background: rgba(226, 204, 179, 1);
      color: #fff;
      cursor: pointer;
    }
  }
  .social-btn {
    width: 460px;
    margin: 12px 0 30px 0;
  }
`;

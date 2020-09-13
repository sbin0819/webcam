import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SinpuWrapper = styled.div`
  position: relative;
  top: 115px;
  padding: 0 40px;
  text-align: center;
  h1 {
    color: #4547a9;
    font-weight: bold;
  }
  h2 {
    color: #4547a9;
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 400px;
  border-radius: 5px;
  margin: 20px 10px;
  border: none;
  background: #c49969;
  filter: ${(props) => (props.isChecked ? null : 'opacity(80%)')};
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const Signup = ({ match, history }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SinpuWrapper>
      <h1>Welcome to Focusmate! 😎</h1>
      <h2>Let’s set up your account. It’s 3 steps and</h2>
      <h2>will take around two minutes.</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '25px auto',
        }}
      >
        <input
          type='checkbox'
          name='color'
          value={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <span style={{ marginLeft: '10px' }}>
          I am 17 years of age or order
        </span>
      </div>
      <StyledLink
        className='btn'
        isChecked={isChecked}
        disabled={!isChecked}
        to={`${match.path}/method`}
      >
        Setup my account
      </StyledLink>
    </SinpuWrapper>
  );
};

export default withRouter(Signup);

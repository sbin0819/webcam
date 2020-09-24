import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Tabs from './tabs';

import styled from 'styled-components';
import { SignupWraaper } from '../styles';

const LoginBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    height: 45px;
    width: 48%;
    cursor: pointer;
    border-radius: 4px;
    border: none;
  }
`;

const Method = ({ location }) => {
  const { state } = location;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(state);
  return (
    <>
      {state?.isValid ? (
        <SignupWraaper>
          <Tabs />
          <div className='title'>
            <h1>How would you like to sign up?</h1>
            <h2>For the best experience, use the email</h2>
            <h2>associated with your calendar.</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name='email'
                ref={register({ required: true })}
                placeholder='email address'
              />
              <input
                name='password'
                type='password'
                ref={register({ required: true })}
                placeholder='email address'
              />
              <input type='submit' value='Sign up with email' />
            </form>
          </div>
          <div className='social-btn'>
            {/* <Link to='verify'>베리파이</Link> */}
            <LoginBtnWrapper>
              <button>Facebook</button>
              <button>Google</button>
            </LoginBtnWrapper>
          </div>
        </SignupWraaper>
      ) : (
        <Redirect to='/signup' />
      )}
    </>
  );
};

export default withRouter(Method);

import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Tabs from './tabs';
import { SignupWraaper } from '../styles';

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
            <Link to='verify'>베리파이</Link>
            <button>페이스북</button>
            <button>구글</button>
          </div>
        </SignupWraaper>
      ) : (
        <Redirect to='/signup' />
      )}
    </>
  );
};

export default withRouter(Method);

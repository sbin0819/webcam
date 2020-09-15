import React from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';

const LoginOuter = styled.form`
  margin: 8% auto;
  width: auto;
  max-width: 460px;
  height: auto;
`;

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

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  input {
    margin: 12px 0;
    width: 100%;
    padding: 20px;
    height: 45px;
    border: 2px solid #e1cbb2;
    border-radius: 4px;
  }
  .btn {
    background-color: #e1cbb2;
    border: none;
    color: white;
    padding: 0;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }
`;

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <LoginOuter>
      <div>
        <h1>Log In</h1>
        <LoginBtnWrapper>
          <button>Facebook</button>
          <button>Google</button>
        </LoginBtnWrapper>
      </div>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <input name='firstname' ref={register} /> {/* register an input */}
        <input name='lastname' ref={register({ required: true })} />
        {errors.lastname && 'Last name is required.'}
        <input name='age' ref={register({ pattern: /\d+/ })} />
        {errors.age && 'Please enter number for age.'}
        <input type='submit' className='btn' value='Sign in with email' />
      </FormWrapper>
    </LoginOuter>
  );
};

export default Login;

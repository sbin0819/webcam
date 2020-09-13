import React from 'react';
import ReactMarkdown from 'react-markdown';
import { markdown } from './markdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 25vw;
  color: #4547a9;
  .top {
    font-size: 45px;
  }
  h1 {
    color: #4547a9;
    font-weight: bold;
    text-align: center;
    margin: 30px auto;
  }
  h2 {
    color: #4547a9;
  }
`;

const Guidelines = () => {
  return (
    <>
      <Wrapper>
        <ReactMarkdown source={markdown} skipHtml={false} escapeHtml={false} />
      </Wrapper>
    </>
  );
};

export default Guidelines;

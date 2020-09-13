import React from 'react';
import { ModalWrapper, ModalInner } from '../styles';

const VideoClip = ({ visible, setVisible }) => {
  return (
    <>
      {visible ? (
        <>
          <ModalWrapper onClick={() => setVisible(!visible)}>
            <ModalInner>
              <h1>비디오 클립</h1>
            </ModalInner>
          </ModalWrapper>
        </>
      ) : null}
    </>
  );
};

export default VideoClip;

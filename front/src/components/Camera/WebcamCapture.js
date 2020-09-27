import React, { useState, useEffect, useCallback } from 'react';
import Webcam from 'react-webcam';
import { CameraWrapper } from './styles';

import Header from './buttons/topButton';

const WebcamCapture = () => {
  const [deviceId, setDeviceId] = useState({});
  const [devices, setDevices] = useState([]);

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput')),
    [setDevices],
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <CameraWrapper>
      <Header />
      {devices.map((device, key) => (
        <div>
          <Webcam
            audio={false}
            mirrored={true}
            style={{ width: '80%', height: '60%' }}
            videoConstraints={{ deviceId: device.deviceId }}
          />
          {/* {device.label || `Device ${key + 1}`} */}
        </div>
      ))}
    </CameraWrapper>
  );
};

export default WebcamCapture;

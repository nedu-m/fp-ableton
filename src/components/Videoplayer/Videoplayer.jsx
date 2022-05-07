import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  top: 2rem;
  margin-bottom: 3rem;
  position: relative;
  display: grid;
  place-items: center;
  overflow-x: hidden;
`;

const VideoContainerInner = styled.iframe`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const Videoplayer = () => {
  return (
    <VideoContainer>
      <VideoContainerInner src='https://player.vimeo.com/video/428281636?h=be0963aaa9&amp;app_id=122963' />
    </VideoContainer>
  )
}

export default Videoplayer;
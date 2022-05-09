import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
import '@slightlyoff/lite-vimeo';

const VideoContainer = styled.div`
  top: 2rem;
  margin:0 0 2rem 1.2rem;
  position: relative;
  overflow-x: hidden;
  padding: 3.5rem;

@media screen and (width: 768px) {
    padding: 0.6rem 0;
    margin: 1rem;
  }

  @media screen and (max-width: 760px) {
    padding: 0;
    margin: 0;
  }
`;


const Videoplayer = () => {
  return (
    <VideoContainer>
      <lite-vimeo
        videoid="428281636"
        frameBorder="0"
      >
      </lite-vimeo>
    </VideoContainer>
  )
}

export default Videoplayer;
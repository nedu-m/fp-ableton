import React from 'react';
import styled from 'styled-components';

const BgTextContainer = styled.div`
margin: 5rem 0.5rem 5rem 0.5rem;
padding: 1rem 8rem 1rem 8rem;

`;
const BgTextContent = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  font-family: "Outfit", sans-serif;
  color: #fff;
  text-align: center;
  line-height: 1.5;
`;

const BackgroundText = () => {
  return (
    <BgTextContainer>
      <BgTextContent>
        We enrich human lives through the thoughtful application 
        of design and technology
      </BgTextContent>
    </BgTextContainer>
  )
};

export default BackgroundText;
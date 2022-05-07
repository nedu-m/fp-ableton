import React from 'react';
import styled from 'styled-components';

const BgTextContainer = styled.div`
margin: 5rem 0.5rem 5rem 0.5rem;
padding: 1rem 9rem 1rem 9rem;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    margin-left: 1rem;
    padding: 0;
  }
`;
const BgTextContent = styled.h1`
  font-size: clamp(3.2rem, 10vw, 4rem);
  font-weight: 500;
  font-family: "Outfit", sans-serif;
  color: #fff;
  text-align: center;
  line-height: 1.5;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2em;
    text-align: left;
  }
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
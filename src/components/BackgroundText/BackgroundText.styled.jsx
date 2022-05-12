import styled from 'styled-components';

export const BgTextContainer = styled.div`
  margin: 5rem 0.5rem 5rem 0.5rem;
  padding: 1rem 9rem 10rem 9rem;
  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    margin-left: 1rem;
    padding: 0;
  }
`;
export const BgTextContent = styled.h1`
  font-size: clamp(3.2rem, 0.4vw, 4rem);
  font-weight: 500;
  font-family: "Outfit", sans-serif;
  color: #fff;
  text-align: center;
  line-height: 1.5;
  inline-size: calc(56rem * 2rem);
  text-align: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: clamp(1.6rem, 6vw, 2rem);
    text-align: start;
    padding: 0 1rem 0 1rem;
  }
`;
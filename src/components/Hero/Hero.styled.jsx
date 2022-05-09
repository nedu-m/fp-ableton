import styled from 'styled-components';

export const Header = styled.header`
  font-family: 'Lexend Deca';
  font-size: calc(5.6rem + 1.5vw);
  color: white;
  background: black;
  text-transform: capitalize;
  letter-spacing: normal;
  font-weight: 700;
  padding: 0.3125rem 0 0 0;
  margin: 0 -0.2rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-left: 3rem;
  }

  @media (width: 1024px) {
    margin-left: 3.3rem;
  }
`;

export const HeroText = styled.p`
  font-family: 'Outfit';
  text-transform: capitalize;
  color: white;
  font-size: calc(1.6rem + 0.1rem);
  margin: 1rem 0.5rem 1.2rem 0.2rem;
  line-height: 1.9rem;
  letter-spacing: calc(normal - 0.1rem);
  text-align: start;
  padding-right: 2rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    word-wrap: break-word;
    margin-left: 3.3rem;
    inline-size: 60rem;
  }

  @media (width: 1024px) {
    margin-left: 3.66rem;
  }
`;
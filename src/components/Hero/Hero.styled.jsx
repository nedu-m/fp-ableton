import styled from 'styled-components';

export const Header = styled.header`
  font-family: 'Lexend Deca';
  font-size: 5.6rem;
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
  font-family: 'Lexend Deca';
  font-weight: 300;
  font-size: 1.12em;
  text-transform: capitalize;
  letter-spacing: normal;
  color: white;
  word-spacing: normal;

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    word-wrap: break-word;
    margin-left: 3.3rem;
    word-break: break-all;
    inline-size: 47rem;
  }

  @media (width: 1024px) {
    margin-left: 3.66rem;
  }
`;
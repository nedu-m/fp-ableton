import styled from 'styled-components';
import { FiArrowRight } from "react-icons/fi";

export const ButtonContainer = styled.button`
  background: ${props => props.theme.colors.white};
  border-radius: 2rem;
  width: 6.8125rem;
  height: 2.1875rem;
  border: none;
  margin: 0.4rem 0;

  @media (width: 1024px) {
    margin-left: 58.56px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0.6rem 0 0 3.3rem;
  }
`;

export const ButtonLink = styled.a`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-family: 'Lexend Deca', sans-serif;
`;


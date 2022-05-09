import styled from 'styled-components';
import { FiArrowRight } from "react-icons/fi";

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  place-content: center;
  align-items: center;
  gap: 0.56rem;
  background: ${props => props.theme.colors.white};
  border-radius: 2rem;
  width: 9rem;
  height: 2.8875rem;
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
  display: flex;
  place-content: center;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  font-size: 0.9rem;
  font-family: 'Lexend Deca', sans-serif;
`;

export const ButtonIcon = styled(FiArrowRight)`
  font-size: 0.8rem;
  display: flex;
  place-content: center;
`;
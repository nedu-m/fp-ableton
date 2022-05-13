import styled from 'styled-components';
import { FiArrowRight } from "react-icons/fi";

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  place-content: center;
  align-items: center;
  gap: 0.66rem;
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

export const WorkButtonContainer = styled(ButtonContainer)`
  @media (max-width: 768px) {
    margin-left: -11.3rem;
  }
  @media (width: 320px) {
    margin-left: -7.73rem;
  }
`

export const NewButtonContainer = styled(ButtonContainer)`
  @media (min-width: 1440px) {
    margin-left: -0.1rem;
  }
`
export const ButtonLink = styled.a`
  display: flex;
  place-content: center;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  font-size: 0.9rem;
  font-family: 'Lexend Deca', sans-serif;
  gap: 0.6rem;
`;

export const ButtonIcon = styled(FiArrowRight)`
  font-size: 0.8rem;
  display: center;
  place-content: center;
  margin-top: 0.2rem;
`;

export const ExploreButtonLink = styled(ButtonLink)`
  @media (min-width: 1440px) {
    margin-left: -0.1rem;
  }
`
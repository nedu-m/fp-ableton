import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './Container.styled';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.black};
  position: sticky;
  top: 0;
  height: 80px;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 0;
    transform: translate(-60%, 20%);
    font-size: 2.2rem;
    padding-top: 0.5rem;
    margin:-35px 0 -5px 0;
    overflow-x: hidden;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  background: ${props => props.theme.colors.black};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    position: absolute;
    flex-direction: column;
    width: 100%;
    top: 50px;
    right: ${({ toggle }) => toggle ? '0' : '-100%'};
    transition: all 0.7s ease;
    background: blue;
    overflow-x: hidden;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-weight: normal;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
    padding: 0.5rem 0;
    text-align: left;
    margin: 0.5rem;
    height: 0;
  }
`;
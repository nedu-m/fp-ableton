import { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiMenu, BiX } from 'react-icons/bi';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  // NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  // MenuItemBtn,
  // MenuLinkBtn,
} from './Navbar.styled';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            instrument
          </NavLogo>
          <MenuIcon toggle={toggle} onClick={handleToggle}>
            {toggle ? <BiX /> : <BiMenu />}
          </MenuIcon>

          <Menu toggle={toggle}>
            <MenuItem>
              <MenuLink to="/" onClick={handleToggle}>
                What we do
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/" onClick={handleToggle}>
                Who we are
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/" onClick={handleToggle}>
                Being here
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/" onClick={handleToggle}>
                Careers
              </MenuLink>
            </MenuItem>
          </Menu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
};

export default Navbar;
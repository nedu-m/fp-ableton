import { createGlobalStyle } from 'styled-components';
import "@fontsource/ibm-plex-mono"
import 'sanitize.css';

const GlobalStyle = createGlobalStyle`
/* General Styles */
  body {
    font-family: ${props => props.theme.ff};
    font-weight: 400;
    font-size: unset;
    line-height: 1.5;
    background: ${props => props.theme.colors.black};
  }
`;

export default GlobalStyle;
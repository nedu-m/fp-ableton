import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import Theme from "./theme/Theme.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";

const Hello = styled.h1`
  font-weight: normal;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: normal;
  color: ${props => props.theme.colors.orange};
`

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <Hello>Hello World</Hello>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

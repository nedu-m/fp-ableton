import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import Theme from "./theme/Theme.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
      <Hero />
    </ThemeProvider>
  );
}

export default App;

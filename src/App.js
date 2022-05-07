import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import Theme from "./theme/Theme.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Videoplayer from "./components/Videoplayer/Videoplayer";
import BackgroundText from "./components/BackgroundText/BackgroundText";


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
      <Videoplayer />
      <BackgroundText />
    </ThemeProvider>
  );
}

export default App;

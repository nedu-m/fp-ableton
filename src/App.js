import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import Theme from "./theme/Theme.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Videoplayer from "./components/Videoplayer/Videoplayer";
import BackgroundText from "./components/BackgroundText/BackgroundText";
import Works from "./components/Works/Works";
import Explore from "./components/Explore/Explore";
import { Helmet } from "react-helmet";


function App() {
  return (
    <>
      <Helmet>
        <title>
          Instrument | A creative agency.
        </title>
        <meta name="description" content="Instrument is a creative agency" />
        <meta data-n-head="ssr" data-hid="og:image" property="og:image" content="https://images.prismic.io/instrument-v5/83967c1c-120b-44c7-89ae-1066bb39f59a_Instrument-homepage-prismic-social.png?auto=compress,format"></meta>
        <link data-n-head="ssr" rel="icon" type="image/x-icon" href="https://www.instrument.com/favicon.ico" />
      </Helmet>

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
        <Works />
        <Explore />
      </ThemeProvider>
    </>
  );
}

export default App;

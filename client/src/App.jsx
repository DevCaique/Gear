// Components
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";

// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "./GlobalStyle";
import { Biblioteca } from "./Pages/Biblioteca";
import { Assistir_mais_tarde } from "./Pages/Assistir_mais_tarde";
import { Historico } from "./Pages/Historico";

// Filmes
import { O_Misterio_De_Silver_Lake } from "./Pages/Filmes/O_Misterio_De_Silver_Lake";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        {/* Home */}
        <Route exact path="/" element={<Home />} />
        <Route
          path="/filmes/o-misterio-de-silver-lake"
          element={<O_Misterio_De_Silver_Lake />}
        />
        {/* Biblioteca */}
        <Route path="/Biblioteca" element={<Biblioteca />} />
        {/* Assistir mais tarde */}
        <Route path="/Assistir-mais-tarde" element={<Assistir_mais_tarde />} />
        {/* Histórico */}
        <Route path="/Historico" element={<Historico />} />
      </Routes>
    </Router>
  );
}

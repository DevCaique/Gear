// Components
import { MenuList, NavbarContainer, NavButton } from "./style";
import { Input } from "./style";

// Imports
import { useState } from "react";

export function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <NavbarContainer>
      {/* Hamburger Button */}
      <span onClick={toggleMenu} className="material-symbols-outlined">
        menu
      </span>
      {/* Menu */}
      <MenuList active={menuActive ? true : false}>
        <div>
          <span
            onClick={toggleMenu}
            className="material-symbols-outlined menu-icon"
          >
            menu
          </span>
        </div>
        <NavButton onClick={toggleMenu} to="/">
          <span className="material-symbols-outlined">home</span>
          Início
        </NavButton>
        <NavButton onClick={toggleMenu} to="/Biblioteca">
          <span className="material-symbols-outlined">video_library</span>
          Biblioteca
        </NavButton>
        <NavButton onClick={toggleMenu} to="/Assistir-mais-tarde">
          <span className="material-symbols-outlined">schedule</span>
          Assistir mais tarde
        </NavButton>
        <NavButton onClick={toggleMenu} to="/Historico">
          <span className="material-symbols-outlined">history</span>
          Histórico
        </NavButton>
      </MenuList>
      {/* Barra de Pesquisa */}
      <Input placeholder="Pesquisar" />
      {/* Configurações */}
      <span
        onClick={() => alert("Ainda projetando")}
        className="material-symbols-outlined"
      >
        settings
      </span>
    </NavbarContainer>
  );
}

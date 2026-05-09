import { FaCalendarAlt } from "react-icons/fa";
import whatsapp from "../../Data/LinkWhatsapp";
import { Brand, Menu, Nav, NavLink, PrimaryButton } from "./styles";

function Navbar() {
  return (
    <Nav aria-label="Navegação principal">
      <Brand>The Blade & Comb</Brand>

      <Menu>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#servicos">Serviços</NavLink>
        <NavLink href="#galeria">Galeria</NavLink>
        <NavLink href="/admin">Painel</NavLink>
        <NavLink href="#sobre">Sobre</NavLink>
      </Menu>

      <PrimaryButton href={whatsapp} target="_blank" rel="noopener noreferrer">
        Agendar horário <FaCalendarAlt size={16} />
      </PrimaryButton>
    </Nav>
  );
}

export default Navbar;

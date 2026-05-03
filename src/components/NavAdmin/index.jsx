import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { Brand, Menu, Nav, NavLink, PrimaryButton } from "./styles";

function Navbar() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [loadingLogout, setLoadingLogout] = useState(false);

  function handleLogout() {
    const confirmLogout = window.confirm("Tem certeza que deseja sair do painel?");

    if (!confirmLogout) {
      return;
    }

    setLoadingLogout(true);

    setTimeout(() => {
      signOut();

      toast.success("Você saiu da conta com sucesso.");

      navigate("/login");

      setLoadingLogout(false);
    }, 500);
  }

  return (
    <Nav aria-label="Navegação principal">
      <Brand>The Blade & Comb</Brand>

      <Menu>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/admin">Admim</NavLink>
      </Menu>

      <PrimaryButton
        type="button"
        onClick={handleLogout}
        disabled={loadingLogout}
        $loading={loadingLogout}
        title="Sair do painel"
        aria-label="Sair do painel administrativo"
      >
        <FaSignOutAlt size={16} />
        {loadingLogout}
      </PrimaryButton>
    </Nav>
  );
}

export default Navbar;

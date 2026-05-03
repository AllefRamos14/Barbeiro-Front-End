import styled from "styled-components";
import { buttonStyles } from "../styles";

export const Nav = styled.nav`
  position: relative;
  z-index: 2;
  max-width: 1240px;
  margin: 0 auto;
  padding: 26px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const Brand = styled.div`
  color: #e2bc73;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: capitalize;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const NavLink = styled.a`
  color: #f6f0e7;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  transition: color 0.2s ease;

  &:hover {
    color: #d6ab5f;
  }
`;

export const PrimaryButton = styled.a`
  ${buttonStyles}
  background: #d9b368;
  color: #111;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.04);
  }
`;
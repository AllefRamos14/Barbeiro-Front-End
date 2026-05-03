import { Copyright, FooterBrand, FooterLink, FooterLinks, FooterWrapper } from "./styles";

function Footer() {
  return (
    <FooterWrapper>
      <FooterBrand>The Blade & Comb</FooterBrand>
      <FooterLinks>
        <FooterLink href="#politica">Políticas de Privacidade</FooterLink>
      </FooterLinks>
      <Copyright>© {new Date().getFullYear()} The Blade & Comb. O Industrial Atelier.</Copyright>
    </FooterWrapper>
  );
}

export default Footer;
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #090909;
  color: rgba(245, 240, 232, 0.7);
  padding: 22px 28px;
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: 20px;
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const FooterBrand = styled.div`
  color: #f8f2e8;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.86rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
`;

export const FooterLink = styled.a`
  color: rgba(245, 240, 232, 0.7);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.76rem;
  transition: color 0.2s ease;

  &:hover {
    color: #e1b96b;
  }
`;

export const Copyright = styled.small`
  font-size: 0.72rem;
  color: rgba(245, 240, 232, 0.5);
`;
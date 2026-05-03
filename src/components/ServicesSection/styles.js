import styled from "styled-components";
import { sectionWidth } from "../styles";

export const Section = styled.section`
  ${sectionWidth}
  padding-top: 32px;
`;

export const ServicesHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 24px;
  align-items: end;
  margin-bottom: 44px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderText = styled.p`
  color: rgba(245, 240, 232, 0.74);
  line-height: 1.8;
  margin: 0;
  max-width: 340px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.article`
  position: relative;
  min-height: 340px;
  padding: 28px;

  background: ${({ $featured }) =>
    $featured
      ? "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))"
      : "rgba(255,255,255,0.03)"};

  border: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  flex-direction: column;
  overflow: hidden;

  backdrop-filter: blur(6px); 

  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(226, 188, 115, 0.5);
    transform: translateY(-6px);

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(226, 188, 115, 0.15),
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const CardNumber = styled.div`
  position: absolute;
  top: 10px;
  right: 18px;

  font-size: 80px;
  font-weight: 800;
  letter-spacing: 2px;

  color: rgba(226, 188, 115, 0.06); 

  line-height: 1;

  pointer-events: none;
  user-select: none;

  transition: all 0.3s ease;
`;

export const CardIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(217, 179, 104, 0.12);
  color: #e1b96b;
  margin-bottom: 22px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 14px;
  font-size: 1.3rem;
  color: #faf5ee;
`;

export const CardDescription = styled.p`
  color: rgba(245, 240, 232, 0.76);
  line-height: 1.8;
  margin: 0;
  max-width: 280px;
`;

export const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding-top: 30px;
`;

export const Price = styled.span`
  color: #e1b96b;
  font-size: 1.5rem;
  font-weight: 800;
`;

export const DetailsLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: #f4efe7;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: 0.72rem;
  font-weight: 500;

  transition: all 0.3s ease;

  
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;

    width: 0%;
    height: 1px;

    background: #e1b96b;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #e1b96b;
  }

  &:hover::after {
    width: 100%;
  }

  
  svg {
    
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

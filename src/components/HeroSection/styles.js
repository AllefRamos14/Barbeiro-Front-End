import styled from "styled-components";
import { buttonStyles } from "../styles";

export const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.92) 0%, rgba(5, 5, 5, 0.74) 40%, rgba(5, 5, 5, 0.48) 100%),
    linear-gradient(180deg, rgba(5, 5, 5, 0.2) 0%, rgba(5, 5, 5, 0.68) 100%);
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 0 auto 0 28px;
  padding: 90px 28px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 88px);
`;

export const Eyebrow = styled.span`
  color: #f0cb85;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.72rem;
  margin-bottom: 18px;
  display: inline-block;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3.2rem, 8vw, 6rem);
  line-height: 0.96;
  text-transform: uppercase;
  margin: 0;
  max-width: 700px;
  letter-spacing: -0.04em;
  color: #f5f1ea;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
`;

export const Accent = styled.span`
  color: #dfb466;
`;

export const HeroText = styled.p`
  margin: 28px 0 0;
  max-width: 520px;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(245, 240, 232, 0.9);
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 36px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
  ${buttonStyles}
  background: #d9b368;
  color: #111;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.04);
  }
`;

export const SecondaryButton = styled.a`
  ${buttonStyles}
  background: rgba(255, 255, 255, 0.02);
  color: #f5f0e8;
  border-color: rgba(255, 255, 255, 0.16);

  &:hover {
    border-color: #d9b368;
    color: #d9b368;
  }
`;
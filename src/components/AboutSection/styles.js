import styled from "styled-components";
import { sectionWidth } from "../styles";

export const AboutSection = styled.section`
  ${sectionWidth}
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 64px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 520px;
  object-fit: cover;

  filter: brightness(0.9) contrast(1.05);
  transition: transform 0.5s ease;

  ${ImageWrap}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 932px) {

   width: 100%;
   height: 320px;
   object-fit: cover;
   display: block;
   }
`;

export const YearBadge = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  padding: 10px 16px;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);

  border: 1px solid rgba(226, 188, 115, 0.4);
  border-radius: 8px;

  color: #e2bc73;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
`;

export const Content = styled.div``;

export const TitleUnderline = styled.div`
  width: 56px;
  height: 2px;
  background: #d8b065;
  margin: 24px 0 28px;
`;

export const Paragraph = styled.p`
  color: rgba(245, 240, 232, 0.82);
  line-height: 1.9;
  margin: 0 0 18px;
`;

export const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: #f4efe7;
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    color: #e2bc73;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export const ValuesList = styled.ul`
  margin: 10px 0 24px;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    position: relative;
    padding-left: 20px;

    font-size: 0.85rem;
    letter-spacing: 0.05em;
    color: rgba(245, 240, 232, 0.85);

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 8px;

      width: 6px;
      height: 6px;

      background: #e2bc73;
      border-radius: 50%;
    }
  }
`;

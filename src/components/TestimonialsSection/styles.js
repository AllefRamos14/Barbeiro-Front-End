import styled from "styled-components";
import { sectionWidth } from "../styles";

export const Section = styled.section`
  ${sectionWidth}
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 36px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const GalleryColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;

  border: 1px solid rgba(226, 188, 115, 0.15);

  background: #000;

  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(226, 188, 115, 0.4);
    transform: translateY(-4px);
  }
`;
export const GalleryLabel = styled.span`
  position: absolute;
  bottom: 16px;
  left: 16px;

  color: #f4efe7;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;

  ${GalleryItem}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;

  filter: grayscale(0.15) brightness(0.9);
  transition: all 0.5s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.08);
    filter: grayscale(0) brightness(1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    transparent
  );

  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

export const QuoteCard = styled.article`
  padding: 12px 0;
  max-width: 560px;
`;

export const QuoteMark = styled.div`
  color: #dfb466;
  font-size: 2.8rem;
  line-height: 1;
  margin-bottom: 8px;
`;

export const QuoteText = styled.p`
  color: rgba(245, 240, 232, 0.88);
  line-height: 1.9;
  font-style: italic;
  margin: 0 0 18px;
`;

export const ClientName = styled.h4`
  margin: 0;
  color: #f6f1ea;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.86rem;
`;

export const ClientRole = styled.span`
  color: rgba(245, 240, 232, 0.56);
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
`;

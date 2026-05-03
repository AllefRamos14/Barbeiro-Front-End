import styled, { css } from "styled-components";

export const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 24px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
`;

export const sectionWidth = css`
  max-width: 1240px;
  margin: 0 auto;
  padding: 110px 28px;
`;

export const SectionEyebrow = styled.span`
  display: inline-block;
  color: #e0b767;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.7rem;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  color: #f7f3ed;
`;

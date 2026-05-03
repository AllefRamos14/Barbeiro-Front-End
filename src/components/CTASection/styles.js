import styled from "styled-components";
import { buttonStyles } from "../styles";

export const Section = styled.section`
  background: #d7b066;
  color: #181512;
  padding: 110px 28px;
`;

export const Content = styled.div`
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
`;

export const CTATitle = styled.h2`
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -0.04em;
`;

export const CTAText = styled.p`
  max-width: 640px;
  margin: 26px auto 34px;
  line-height: 1.8;
  color: rgba(24, 21, 18, 0.84);
`;

export const DarkButton = styled.a`
  ${buttonStyles}
  background: #2a1f12;
  color: #fff6ea;
  padding-inline: 34px;

  &:hover {
    transform: translateY(-2px);
    background: #1f160d;
  }
`;
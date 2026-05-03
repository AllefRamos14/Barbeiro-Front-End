import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const scanline = keyframes`
  0%   { top: -10%; }
  100% { top: 110%; }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #080808;
  position: relative;
  overflow: hidden;
 
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 39px,
        rgba(224, 183, 103, 0.04) 39px,
        rgba(224, 183, 103, 0.04) 40px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 39px,
        rgba(224, 183, 103, 0.04) 39px,
        rgba(224, 183, 103, 0.04) 40px
      );
    pointer-events: none;
  }
 
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(224,183,103,0.10) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const ScanLine = styled.div`
  position: absolute;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(224,183,103,0.18), transparent);
  animation: ${scanline} 6s linear infinite;
  pointer-events: none;
  z-index: 10;
`;

export const Card = styled.div`
  position: relative;
  width: 440px;
  background: #111010;
  border: 1px solid rgba(224, 183, 103, 0.25);
  padding: 52px 48px 44px;
  animation: ${fadeIn} 0.7s ease both;
  z-index: 20;
 
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #e0b767, transparent);
  }
 
  &::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(224,183,103,0.4), transparent);
  }
`;

export const CornerAccent = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  border-color: #e0b767;
  border-style: solid;
  opacity: 0.6;
 
  &.tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
  &.tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
  &.bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
  &.br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
`;

export const LogoArea = styled.div`
  text-align: center;
  margin-bottom: 36px;
`;

export const ScissorIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: 1.5px solid rgba(224,183,103,0.4);
  border-radius: 50%;
  margin-bottom: 16px;
  color: #e0b767;
  font-size: 22px;
 
  svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: #e0b767;
    stroke-width: 1.5;
  }
`;

export const BrandName = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: #e0b767;
  text-transform: uppercase;
  line-height: 1;
  background: linear-gradient(
    90deg,
    #c9922a 0%,
    #e0b767 40%,
    #f5d98a 60%,
    #e0b767 80%,
    #c9922a 100%
  );
  background-size: 400px 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 4s linear infinite;
`;

export const Tagline = styled.p`
  font-size: 10px;
  letter-spacing: 0.35em;
  color: rgba(224,183,103,0.5);
  text-transform: uppercase;
  margin-top: 6px;
  font-weight: 500;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
 
  span {
    flex: 1;
    height: 1px;
    background: rgba(224,183,103,0.15);
  }
 
  em {
    font-style: normal;
    font-size: 10px;
    letter-spacing: 0.2em;
    color: rgba(224,183,103,0.35);
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const FieldGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(224,183,103,0.6);
  font-weight: 600;
  margin-bottom: 8px;
`;

export const InputWrapper = styled.div`
  position: relative;
 
  svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    stroke: ${({ $focused }) => ($focused ? "#e0b767" : "rgba(224,183,103,0.35)")};
    fill: none;
    stroke-width: 1.5;
    transition: stroke 0.2s;
    pointer-events: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: rgba(224, 183, 103, 0.04);
  border: 1px solid ${({ focused }) =>
    focused ? "rgba(224,183,103,0.55)" : "rgba(224,183,103,0.15)"};
  color: #f0e6cc;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 13px 14px 13px 42px;
  outline: none;
  transition: border-color 0.25s, background 0.25s;
  letter-spacing: 0.02em;
 
  &::placeholder {
    color: rgba(224,183,103,0.2);
    font-size: 13px;
  }
 
  &:focus {
    background: rgba(224, 183, 103, 0.07);
    border-color: rgba(224,183,103,0.55);
  }
`;

export const ForgotLink = styled.a`
  display: block;
  text-align: right;
  font-size: 11px;
  color: rgba(224,183,103,0.45);
  text-decoration: none;
  letter-spacing: 0.05em;
  margin-top: -12px;
  margin-bottom: 28px;
  cursor: pointer;
  transition: color 0.2s;
 
  &:hover {
    color: #e0b767;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  background: ${({ $loading }) => ($loading ? "rgba(224,183,103,0.6)" : "#e0b767")};
  border: none;
  font-family: 'Raleway', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #0a0a0a;
  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
  transition: background 0.2s, transform 0.1s;
  position: relative;
  overflow: hidden;
 
  &:hover:not(:disabled) {
    background: #f5d98a;
  }
 
  &:active:not(:disabled) {
    transform: scale(0.99);
  }
 
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%);
    transform: translateX(-100%);
    transition: transform 0.4s;
  }
 
  &:hover::after {
    transform: translateX(100%);
  }
`;

export const FooterText = styled.p`
  text-align: center;
  margin-top: 24px;
  font-size: 12px;
  color: rgba(224,183,103,0.3);
  letter-spacing: 0.05em;
 
  a {
    color: rgba(224,183,103,0.7);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
    cursor: pointer;
 
    &:hover {
      color: #e0b767;
    }
  }
`;

export const ErrorMsg = styled.p`
  font-size: 11px;
  color: #e05555;
  letter-spacing: 0.05em;
  margin-top: 10px;
  text-align: center;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.3s;
`;

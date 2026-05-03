import styled from "styled-components";


export const Page = styled.main`
  min-height: 100vh;
  padding: 80px 8%;
  background: ${({ theme }) => theme.colors?.background || "#1a1209"};
  color: ${({ theme }) => theme.colors?.text || "#ffffff"};
`;

export const Title = styled.h1` 
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: 12px;
`;

export const Subtitle = styled.p`
  max-width: 620px;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 40px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PriceCard = styled.article`
  padding: 28px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(226, 188, 115, 0.18);

  h3 {
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    margin-bottom: 20px;
  }
`;

export const Field = styled.label`
  display: grid;
  gap: 8px;
  margin-bottom: 16px;

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Input = styled.input`
  height: 48px;
  border-radius: 12px;
  border: 1px solid rgba(226, 188, 115, 0.3);
  background: rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text};
  padding: 0 14px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PricePreview = styled.p`
  color: ${({ theme }) => theme.colors.muted};

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;

`;

export const Button = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 14px 22px;
  background: ${({ theme }) => theme.colors.primary};
  color: #1a1209;
  font-weight: 700;

  &:hover{
    cursor: pointer;
    opacity: 80%;
    
  }
`;

export const ResetButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(226, 188, 115, 0.35);
`;
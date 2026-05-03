import { ClientName, ClientRole, QuoteMark, QuoteText, QuoteCard as Styled } from "./styles";

function QuoteCard({ text, name, role }) {
  return (
    <Styled>
      <QuoteMark>"</QuoteMark>
      <QuoteText>{text}</QuoteText>
      <ClientName>{name}</ClientName>
      <ClientRole>{role}</ClientRole>
    </Styled>
  );
}

export default QuoteCard;

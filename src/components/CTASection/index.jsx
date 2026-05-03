import whatsapp from "../../Data/LinkWhatsapp";
import { Content, CTAText, CTATitle, DarkButton, Section } from "./styles";

function CTASection() {
  return (
    <Section id="agendamento">
      <Content>
        <CTATitle>
          Pronto para elevar seu <br /> estilo?
        </CTATitle>
        <CTAText>
          Agende seu horário agora e descubra por que somos a barbearia
          referência em design industrial e precisão.
        </CTAText>
        <DarkButton href={whatsapp} target="_blank" rel="noopener noreferrer">
          Garantir minha reserva
        </DarkButton>
      </Content>
    </Section>
  );
}

export default CTASection;

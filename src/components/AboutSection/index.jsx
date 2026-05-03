import { FaArrowRight } from "react-icons/fa";
import historyImage from "../../assets/Logo.webp";
import { SectionEyebrow, SectionTitle } from "../styles";
import {
  AboutImage,
  Content,
  ImageWrap,
  Paragraph,
  AboutSection as Section,
  TextLink,
  TitleUnderline,
  ValuesList,
  YearBadge,
} from "./styles";

function AboutSection() {
  return (
    <Section id="sobre">
      <ImageWrap>
        <AboutImage src={historyImage} alt="Interior da barbearia" />
        <YearBadge>EST. 2014</YearBadge>
      </ImageWrap>

      <Content>
        <SectionEyebrow>Institucional</SectionEyebrow>
        <SectionTitle>Nossa história</SectionTitle>
        <TitleUnderline />
        <Paragraph>
          Fundada no coração do distrito industrial, a <strong>The Blade & Comb</strong> nasceu da
          união entre tradição artesanal e estética contemporânea.
        </Paragraph>
        <Paragraph>
          Mais do que uma barbearia, somos um espaço de experiência. Aqui, cada detalhe — do corte
          ao ambiente — é pensado para oferecer precisão, conforto e identidade.
        </Paragraph>

        <ValuesList>
          <li>Precisão artesanal</li>
          <li>Atendimento personalizado</li>
          <li>Ambiente premium</li>
        </ValuesList>

        <TextLink href="#mestres">
          Conheça nossos especialistas <FaArrowRight size={16} />
        </TextLink>
      </Content>
    </Section>
  );
}

export default AboutSection;

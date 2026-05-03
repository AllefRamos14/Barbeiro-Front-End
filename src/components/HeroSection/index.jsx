import { FaCalendarAlt } from "react-icons/fa";
import galleryOne from "../../assets/Cortes.webp";
import whatsapp from "../../Data/LinkWhatsapp";
import Navbar from "../Navbar";
import {
  Accent,
  BackgroundImage,
  Eyebrow,
  Hero,
  HeroActions,
  HeroContent,
  HeroText,
  HeroTitle,
  Overlay,
  PrimaryButton,
  SecondaryButton,
} from "./styles";

function HeroSection() {
  return (
    <Hero>
      <Overlay />
      <BackgroundImage src={galleryOne} alt="Barbeiro atendendo cliente" />

      <Navbar />

      <HeroContent id="home">
        <Eyebrow>O industrial atelier</Eyebrow>
        <HeroTitle>
          Precisão em <br />
          <Accent>Cada traço.</Accent>
        </HeroTitle>
        <HeroText>
          Mais que um corte, uma experiência de curadoria estética. Onde a tradição da barbearia
          clássica encontra o design industrial contemporâneo.
        </HeroText>
        <HeroActions>
          <PrimaryButton href={whatsapp} target="_blank" rel="noopener noreferrer">
            Agendar horário <FaCalendarAlt size={16} />
          </PrimaryButton>
          <SecondaryButton as="a" href="#servicos">
            Nossos serviços
          </SecondaryButton>
        </HeroActions>
      </HeroContent>
    </Hero>
  );
}

export default HeroSection;

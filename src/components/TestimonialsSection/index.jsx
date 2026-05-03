import galleryOne from "../../assets/Cortes.webp";
import galleryTwo from "../../assets/Cortes2.webp";
import testimonials from "../../Data/testimonials";
import { SectionEyebrow, SectionTitle } from "../styles";
import QuoteCard from "./QuoteCard";
import {
  GalleryColumn,
  GalleryImage,
  GalleryItem,
  GalleryLabel,
  Overlay,
  Section,
  TestimonialsColumn,
} from "./styles";

function TestimonialsSection() {
  const galleryImages = [
    {
      src: galleryOne,
      alt: "Corte masculino degradê finalizado com acabamento profissional",
      label: "Corte Premium",
    },
    {
      src: galleryTwo,
      alt: "Ferramentas premium utilizadas em atendimento de barbearia",
      label: "Corte Premium",
    },
  ];

  return (
    <Section id="galeria">
      <TestimonialsColumn>
        <SectionEyebrow>Experiência</SectionEyebrow>

        <SectionTitle>
          O que dizem <br /> nossos clientes
        </SectionTitle>

        {testimonials.map((item) => (
          <QuoteCard key={item.id} {...item} />
        ))}
      </TestimonialsColumn>

      <GalleryColumn aria-label="Galeria de cortes e ambiente da barbearia">
        {galleryImages.map((image) => (
          <GalleryItem key={image.alt}>
            <GalleryImage src={image.src} alt={image.alt} loading="lazy" decoding="async" />

            <Overlay />

            <GalleryLabel>{image.label}</GalleryLabel>
          </GalleryItem>
        ))}
      </GalleryColumn>
    </Section>
  );
}

export default TestimonialsSection;

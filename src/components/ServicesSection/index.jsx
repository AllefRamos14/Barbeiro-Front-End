import { useServices } from "../../context/ServicesContext";
import { SectionEyebrow, SectionTitle } from "../styles";
import ServiceCard from "./ServiceCard";
import { CardsGrid, HeaderText, Section, ServicesHeader } from "./styles";

function ServicesSection() {
  const { services, isLoadingServices } = useServices();

  return (
    <Section id="servicos">
      <ServicesHeader>
        <div>
          <SectionEyebrow>Especialidades</SectionEyebrow>
          <SectionTitle>Serviços em destaque</SectionTitle>
        </div>

        <HeaderText>
          Oferecemos o equilíbrio perfeito entre o corte clássico e as tendências do design capilar
          contemporâneo.
        </HeaderText>
      </ServicesHeader>

      {isLoadingServices ? (
        <p>Carregando serviços...</p>
      ) : (
        <CardsGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={{ ...service, displayId: String(index + 1).padStart(2, "0") }}
              featured={index === 1}
            />
          ))}
        </CardsGrid>
      )}
    </Section>
  );
}
export default ServicesSection;

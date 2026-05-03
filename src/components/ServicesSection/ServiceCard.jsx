import { BiFace } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { createWhatsAppLink } from "../../Data/LinkWhatsapp";
import { serviceIcons } from "../../Data/servicos";

import {
  CardDescription,
  CardFooter,
  CardIcon,
  CardNumber,
  CardTitle,
  DetailsLink,
  Price,
  ServiceCard as StyledCard,
} from "./styles";

function ServiceCard({ service, featured }) {
  const Icon = serviceIcons[service.icon] || BiFace;

  return (
    <StyledCard $featured={featured}>
      <CardNumber>{service.displayId}</CardNumber>

      <CardIcon>
        <Icon />
      </CardIcon>

      <CardTitle>{service.title}</CardTitle>
      <CardDescription>{service.description}</CardDescription>

      <CardFooter>
        <Price>
          {Number(service.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>

        <DetailsLink href={createWhatsAppLink(service)} target="_blank" rel="noopener noreferrer">
          Detalhes <FaArrowRight size={14} />
        </DetailsLink>
      </CardFooter>
    </StyledCard>
  );
}

export default ServiceCard;

import { BiFace } from "react-icons/bi";
import { RiScissorsFill } from "react-icons/ri";

export const defaultServices = [
  {
    id: "01",
    icon: "scissors",
    title: "Corte Social",
    description: "Corte tradicional com acabamento limpo e alinhado.",
    price: 15,
  },
  {
    id: "02",
    icon: "scissors",
    title: "Corte Degradê",
    description: "Degradê moderno com transição suave e acabamento preciso.",
    price: 20,
  },
  {
    id: "03",
    icon: "scissors",
    title: "Corte Degradê Navalhado",
    description: "Corte com técnica na navalha para um acabamento mais definido e estiloso.",
    price: 25,
  },
  {
    id: "04",
    icon: "face",
    title: "Barba Completa",
    description: "Alinhamento, desenho e finalização da barba.",
    price: 15,
  },
];

export const serviceIcons = {
  scissors: RiScissorsFill,
  face: BiFace,
};

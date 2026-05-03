export const whatsapp = `https://wa.me/5585991728363?text=${encodeURIComponent("Olá! Quero agendar um horário.")}`;

export const createWhatsAppLink = (service) => {
  const message = `Olá! Quero agendar o serviço: ${service.title} - ${service.price}`;
  return `https://wa.me/5585991728363?text=${encodeURIComponent(message)}`;
};
export default whatsapp;
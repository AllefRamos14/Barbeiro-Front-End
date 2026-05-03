import { useServices } from "../../context/ServicesContext";

function AdminPanel() {
  const { services, updateServicePrice, resetServices } = useServices();

  return (
    <section>
      <h2>Painel Administrativo</h2>
      <p>Altere os valores dos serviços abaixo.</p>

      {services.map((service) => (
        <div key={service.id}>
          <h3>{service.title}</h3>

          <label>
            Valor:
            <input
              type="number"
              min="0"
              value={service.price}
              onChange={(event) => updateServicePrice(service.id, event.target.value)}
            />
          </label>
        </div>
      ))}

      <button type="button" onClick={resetServices}>
        Restaurar valores padrão
      </button>
    </section>
  );
}

export default AdminPanel;

import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavAdmin from "../../components/NavAdmin";
import api from "../../services/api";
import {
  Actions,
  Button,
  Field,
  FormGrid,
  Input,
  Page,
  PriceCard,
  PricePreview,
  ResetButton,
  Subtitle,
  Title,
} from "./styles";

const emptyForm = {
  title: "",
  description: "",
  price: "",
  duration: "",
};

function Admin() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const loadServices = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get("/services");

      setServices(response.data);
    } catch {
      toast.error("Erro ao carregar serviços.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadServices();
  }, [loadServices]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function updateServiceField(id, field, value) {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? {
              ...service,
              [field]: value,
            }
          : service,
      ),
    );
  }

  async function handleCreateService(event) {
    event.preventDefault();

    if (!form.title || !form.description || !form.price) {
      toast.warning("Preencha título, descrição e preço.");
      return;
    }

    try {
      setIsSaving(true);

      await api.post("/services", {
        title: form.title,
        description: form.description,
        price: form.price,
        duration: form.duration,
        icon: form.icon,
      });

      toast.success("Serviço criado com sucesso.");
      setForm(emptyForm);
      loadServices();
    } catch {
      toast.error("Erro ao criar serviço.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleUpdateService(service) {
    try {
      setIsSaving(true);

      await api.put(`/services/${service.id}`, {
        title: service.title,
        description: service.description,
        price: service.price,
        duration: service.duration,
        active: service.active,
      });

      toast.success("Serviço atualizado com sucesso.");
      loadServices();
    } catch {
      toast.error("Erro ao atualizar serviço.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDeleteService(id) {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar este serviço?");

    if (!confirmDelete) {
      return;
    }

    try {
      await api.delete(`/services/${id}`);

      toast.success("Serviço deletado com sucesso.");
      loadServices();
    } catch {
      toast.error("Erro ao deletar serviço.");
    }
  }

  return (
    <>
      <NavAdmin />

      <Page>
        <Title>Painel Administrativo</Title>
        <Subtitle>Gerencie os serviços da barbearia.</Subtitle>

        <form onSubmit={handleCreateService}>
          <FormGrid>
            <PriceCard>
              <h3>Criar novo serviço</h3>
              <p>Cadastre um novo serviço para aparecer no site.</p>

              <Field>
                <span>Ícone</span>
                <select name="icon" value={form.icon} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="scissors">Tesoura</option>
                  <option value="face">Rosto</option>
                </select>
              </Field>

              <Field>
                <span>Título</span>
                <Input
                  type="text"
                  name="title"
                  placeholder="Ex: Corte Social"
                  value={form.title}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <span>Descrição</span>
                <Input
                  type="text"
                  name="description"
                  placeholder="Descrição do serviço"
                  value={form.description}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <span>Preço</span>
                <Input
                  type="number"
                  name="price"
                  min="0"
                  placeholder="15"
                  value={form.price}
                  onChange={handleChange}
                />
              </Field>

              <Field>
                <span>Duração</span>
                <Input
                  type="text"
                  name="duration"
                  placeholder="30 min"
                  value={form.duration}
                  onChange={handleChange}
                />
              </Field>

              <Actions>
                <Button type="submit" disabled={isSaving}>
                  {isSaving ? "Criando..." : "Criar serviço"}
                </Button>
              </Actions>
            </PriceCard>
          </FormGrid>
        </form>

        <Subtitle>Serviços cadastrados</Subtitle>

        {isLoading ? (
          <p>Carregando serviços...</p>
        ) : (
          <FormGrid>
            {services.map((service) => (
              <PriceCard key={service.id}>
                <Field>
                  <span>Título</span>
                  <Input
                    type="text"
                    value={service.title}
                    onChange={(event) =>
                      updateServiceField(service.id, "title", event.target.value)
                    }
                  />
                </Field>

                <Field>
                  <span>Descrição</span>
                  <Input
                    type="text"
                    value={service.description}
                    onChange={(event) =>
                      updateServiceField(service.id, "description", event.target.value)
                    }
                  />
                </Field>

                <Field>
                  <span>Preço</span>
                  <Input
                    type="number"
                    min="0"
                    value={service.price}
                    onChange={(event) =>
                      updateServiceField(service.id, "price", event.target.value)
                    }
                  />
                </Field>

                <Field>
                  <span>Duração</span>
                  <Input
                    type="text"
                    value={service.duration || ""}
                    onChange={(event) =>
                      updateServiceField(service.id, "duration", event.target.value)
                    }
                  />
                </Field>

                <PricePreview>
                  Valor atual:{" "}
                  <strong>
                    {Number(service.price).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                </PricePreview>

                <Actions>
                  <Button
                    type="button"
                    disabled={isSaving}
                    onClick={() => handleUpdateService(service)}
                  >
                    Salvar
                  </Button>

                  <ResetButton type="button" onClick={() => handleDeleteService(service.id)}>
                    Deletar
                  </ResetButton>
                </Actions>
              </PriceCard>
            ))}
          </FormGrid>
        )}
      </Page>
    </>
  );
}

export default Admin;

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "../services/api";

const ServicesContext = createContext(null);

export function ServicesProvider({ children }) {
  const [services, setServices] = useState([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);

  const loadServices = useCallback(async () => {
    try {
      setIsLoadingServices(true);

      const response = await api.get("/services");

      setServices(response.data);
    } catch (error) {
      console.error("Erro ao carregar serviços:", error);
    } finally {
      setIsLoadingServices(false);
    }
  }, []);

  useEffect(() => {
    loadServices();
  }, [loadServices]);

  return (
    <ServicesContext.Provider
      value={{
        services,
        setServices,
        loadServices,
        isLoadingServices,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  const context = useContext(ServicesContext);

  if (!context) {
    throw new Error("useServices deve ser usado dentro de ServicesProvider");
  }

  return context;
}

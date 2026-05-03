import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { ServicesProvider } from "../src/context/ServicesContext.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ServicesProvider>
          <App />
          <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        </ServicesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

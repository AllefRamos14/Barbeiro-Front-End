<div align="center">

<img src="https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/react-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
<img src="https://img.shields.io/badge/license-MIT-black?style=for-the-badge" />

<br />
<br />

# ✂️ THE BLADE & COMB

### Agendamento inteligente para barbearias modernas

Aplicação web moderna para gestão e agendamento de serviços de barbearia.

</div>

---

# 🌐 Demonstração

- 🔗 Front-end: https://barbearia-washington.vercel.app/
- ⚙️ API: https://barbeiro-back-end.onrender.com/api/health

---

# 📸 Preview

## Home

<p align="center">
  <img src="./public/preview-home.png" width="900" />
</p>

## Painel administrativo

<p align="center">
  <img src="./public/preview-admin.png" width="900" />
</p>

---

# 📌 Sobre o projeto

O **The Blade & Comb** é uma aplicação web desenvolvida para modernizar o processo de agendamento e gerenciamento de serviços em barbearias.

O sistema oferece uma experiência intuitiva para clientes realizarem agendamentos online e um painel administrativo completo para gerenciamento de serviços, horários e atendimento.

O projeto foi desenvolvido com foco em:

- ⚡ Performance
- 🎨 Experiência do usuário
- 📱 Responsividade
- 🧩 Componentização
- 🧼 Código limpo
- 🚀 Escalabilidade front-end

---

# ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 📅 Agendamento online | Clientes escolhem serviços e horários |
| ✂️ Catálogo de serviços | Listagem dinâmica de serviços e preços |
| 🧾 Painel administrativo | Gerenciamento completo da aplicação |
| 💬 Integração WhatsApp | Comunicação rápida com clientes |
| 🔔 Notificações toast | Feedback visual em tempo real |
| 📱 Layout responsivo | Compatível com mobile, tablet e desktop |
| 🎨 UI moderna | Interface premium com Styled Components |
| ⚡ Atualização dinâmica | Alterações refletidas instantaneamente |
| 💾 Persistência local | Dados mantidos com localStorage |

---

# 🧠 Arquitetura da aplicação

- Componentização reutilizável
- Organização modular por domínio
- Context API para gerenciamento de estado
- Persistência local com localStorage
- Integração REST API via Axios
- Responsividade mobile-first
- Estrutura escalável para crescimento do projeto

---

# 🛠️ Stack tecnológica

## Front-end

| Tecnologia | Função |
|---|---|
| ⚛️ React 19 | Biblioteca principal |
| ⚡ Vite | Build tool e dev server |
| 🎨 Styled Components | Estilização CSS-in-JS |
| 🔀 React Router DOM | Gerenciamento de rotas |
| 🌐 Axios | Requisições HTTP |
| 🔔 React Toastify | Sistema de notificações |
| 🎯 React Icons | Biblioteca de ícones |
| 🎯 Lucide React | Ícones SVG modernos |

---

## Qualidade de código

| Ferramenta | Função |
|---|---|
| 🧹 Biome | Lint e formatação |
| 📦 Yarn | Gerenciador de pacotes |

---

# 📁 Estrutura do projeto

```bash
Barbeiro-Front-End/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   └── main.jsx
├── biome.json
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Como executar o projeto

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- Node.js 18+
- Yarn ou npm

---

## 🔹 1. Clonar repositório

```bash
git clone https://github.com/AllefRamos14/Barbeiro-Front-End.git
```

---

## 🔹 2. Entrar na pasta

```bash
cd Barbeiro-Front-End
```

---

## 🔹 3. Instalar dependências

```bash
yarn install
```

---

## 🔹 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://barbeiro-back-end.onrender.com
VITE_WHATSAPP_NUMBER=551199999999
```

---

## 🔹 5. Rodar aplicação

```bash
yarn dev
```

Acesse:

```bash
http://localhost:5173
```

---

# 📦 Scripts disponíveis

```bash
yarn dev        # Ambiente de desenvolvimento
yarn build      # Build de produção
yarn preview    # Visualizar build local
yarn lint       # Verificar problemas de código
yarn format     # Formatar código
yarn check      # Validar projeto
yarn fix        # Corrigir problemas automaticamente
```

---

# 🚀 Deploy

A aplicação pode ser publicada facilmente em plataformas modernas como:

- ▲ Vercel
- Netlify
- Render
- GitHub Pages

Para gerar a build:

```bash
yarn build
```

Os arquivos otimizados serão gerados na pasta:

```bash
/dist
```

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto, aprofundei conhecimentos em:

- Arquitetura React
- Componentização escalável
- Styled Components
- Context API
- Integração com APIs REST
- UX/UI responsiva
- Deploy com Vercel e Render
- Organização de código front-end
- Boas práticas de desenvolvimento

---

# 🔮 Melhorias futuras

- 🔐 Sistema de autenticação
- 📅 Calendário avançado de agendamentos
- 💳 Integração com pagamentos online
- 📊 Dashboard analítico
- 📨 Notificações automáticas
- 🌙 Dark mode
- 📱 PWA

---

# 🤝 Contribuindo

Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch:

```bash
git checkout -b feature/minha-feature
```

3. Commit suas alterações:

```bash
git commit -m "feat: minha feature"
```

4. Faça push:

```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request 🚀

---

# 📄 Licença

Este projeto está sob a licença MIT.

---

<div align="center">

## 👨‍💻 Desenvolvido por :contentReference[oaicite:0]{index=0}

### Desenvolvedor Full Stack focado em aplicações modernas web

[GitHub](https://github.com/AllefRamos14) •
[LinkedIn](https://www.linkedin.com/in/allef-ramos)

<br />

⭐ Se este projeto te ajudou, considere deixar uma estrela no repositório.

</div>

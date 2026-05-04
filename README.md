<div align="center">

<img src="https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/react-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/vite-⚡-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />

<br />
<br />

```
  ✂️  THE BLADE & COMB
      Agendamento inteligente para barbearias modernas
```

</div>

---

## 📌 Sobre o projeto

**The Blade & Comb** é uma aplicação web moderna para **agendamento e gestão de serviços de barbearia**, desenvolvida com foco em performance, experiência do usuário e boas práticas de desenvolvimento front-end.

O sistema permite que clientes agendem serviços de forma simples e rápida, enquanto administradores gerenciam tudo por meio de um painel dedicado — com integração direta ao WhatsApp para confirmações e comunicação.

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 📅 Agendamento online | Clientes escolhem serviço, horário e barbeiro |
| ✂️ Catálogo de serviços | Listagem com preços e descrições |
| 🧾 Painel administrativo | Edição de serviços, horários e agendamentos |
| 💬 Integração WhatsApp | Confirmações e lembretes automáticos via WhatsApp |
| 🔔 Notificações toast | Feedbacks visuais em tempo real para o usuário |
| 📱 Layout responsivo | Interface adaptada para mobile, tablet e desktop |
| 🎨 Design moderno | UI refinada construída com Styled Components |

---

## 🛠️ Stack tecnológica

### Front-end

| Tecnologia | Versão | Função |
|---|---|---|
| ⚛️ React | 19 | Biblioteca principal de UI |
| ⚡ Vite | — | Build tool e dev server |
| 🎨 Styled Components | — | Estilização com CSS-in-JS |
| 🔀 React Router DOM | — | Roteamento client-side |
| 🔔 React Toastify | — | Notificações toast |
| 🌐 Axios | — | Requisições HTTP |
| 🎯 Lucide Icons | — | Ícones SVG modernos |
| 🎯 React Icons | — | Biblioteca de ícones complementar |

### Qualidade de código

| Ferramenta | Função |
|---|---|
| 🧹 Biome | Lint + formatação de código |

---

## 📁 Estrutura do projeto

```
the-blade-and-comb/
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/             # Imagens, fontes e ícones
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/              # Páginas da aplicação
│   ├── routes/             # Configuração de rotas
│   ├── services/           # Chamadas à API (Axios)
│   ├── styles/             # Temas e estilos globais
│   └── main.jsx            # Entry point
├── .gitignore
├── biome.json              # Configuração do Biome
├── package.json
├── vite.config.js
└── README.md
```

> ⚠️ A estrutura acima é uma sugestão baseada nas tecnologias utilizadas. Ajuste conforme a organização real do seu projeto.

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) ou npm

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/the-blade-and-comb.git
cd the-blade-and-comb
```

### 🔹 2. Instalar dependências

```bash
yarn install
```

### 🔹 3. Configurar variáveis de ambiente

```bash
cp .env.example .env
```

Preencha o arquivo `.env` com as suas configurações:

```env
VITE_API_URL=https://sua-api.com
VITE_WHATSAPP_NUMBER=5511999999999
```

### 🔹 4. Iniciar em desenvolvimento

```bash
yarn dev
```

Acesse: [http://localhost:5173](http://localhost:5173

---

## 📦 Scripts disponíveis

```bash
yarn dev        # Inicia o servidor de desenvolvimento
yarn build      # Gera o build de produção
yarn preview    # Visualiza o build localmente
yarn lint       # Verifica problemas de código com o Biome
yarn format     # Formata o código com o Biome
yarn check      # Analisa e reporta problemas
yarn fix        # Corrige problemas automaticamente
```

---

## 🚀 Deploy

Para gerar a build de produção:

```bash
yarn build
```

Os arquivos otimizados serão gerados na pasta `/dist`, prontos para deploy em qualquer serviço de hospedagem estática como **Vercel**, **Netlify** ou **GitHub Pages**.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um **fork** do projeto
2. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
3. Faça o commit das suas alterações: `git commit -m 'feat: minha nova feature'`
4. Faça o push para a branch: `git push origin feature/minha-feature`
5. Abra um **Pull Request**

> Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/).

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<div align="center">

Feito com ❤️ e ☕ por **[Seu Nome](https://github.com/SEU-USUARIO)**

⭐ Se esse projeto te ajudou, considere deixar uma estrela no repositório!

</div>

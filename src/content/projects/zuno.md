---
title: "Zuno - Consolidador de Investimentos"
description: "Plataforma financeira projetada para centralizar e gerenciar investimentos com visão em tempo real, utilizando microsserviços e um monorepo."
date: "2025-09-05"
repoURL: "https://github.com/ilanzgx/zuno-app"
tags:
  [
    "Next.js",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Python",
    "FastAPI",
    "Docker",
  ]
---

## 🧠 Sobre

O **Zuno** é uma aplicação completa desenhada para centralizar a vida financeira de um investidor. Ele atua como um consolidador de investimentos unificando o portfólio, agregando dados do mercado e entregando uma visão holística do patrimônio.

---

## ⚙️ Tecnologias

O projeto segue uma arquitetura em **Monorepo**, orquestrando diferentes aplicações de forma simultânea:

- **Frontend (Web):** Next.js, React, TypeScript e Tailwind CSS com _Server Components_
- **Backend Core (API):** Java 21, Spring Boot, PostgreSQL e Redis — transações, carteiras e regras de negócio
- **Market API (Data Proxy):** Python 3.13 e FastAPI com `uv` — extração de _Market Data_ em tempo real da B3 (Ações, FIIs) e Criptomoedas

---

## 📸 Imagens

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
  <img src="/portfolio/images/projects/zuno/image_1.png" alt="Dashboard principal Zuno" class="w-full h-full object-cover rounded-lg border border-black/10 dark:border-white/10 !m-0" data-zoomable />
  <img src="/portfolio/images/projects/zuno/image_2.png" alt="Visualização da carteira 1" class="w-full h-full object-cover rounded-lg border border-black/10 dark:border-white/10 !m-0" data-zoomable />
  <img src="/portfolio/images/projects/zuno/image_3.png" alt="Visualização comparador de carteira 2" class="col-span-1 md:col-span-2 w-full h-auto object-cover rounded-lg border border-black/10 dark:border-white/10 !m-0" data-zoomable />
</div>

---

## ▶️ Como rodar

```bash
git clone https://github.com/ilanzgx/zuno-app.git
cd zuno-app
npm install
npm run dev
```

> O comando `npm run dev` sobe todo o stack (Next.js, Spring Boot e Uvicorn/FastAPI) de uma só vez pelo gerenciamento unificado do monorepo.

---

## ✨ Funcionalidades

- **Visão em Tempo Real:** Performance de portfólio, análise de alocações e histórico de dividendos
- **Interface Minimalista:** Dashboard focada no usuário final com gráficos interativos
- **Orquestração Integrada:** Infraestrutura multi-linguagem via **Docker** para serviços acessórios

---

## 📌 Status

🟡 Em andamento

---

## 👤 Autor

Ilan Fonseca
[github.com/ilanzgx](https://github.com/ilanzgx)

_Código aberto sob a licença **AGPLv3**._

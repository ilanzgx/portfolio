---
title: "Zuno - Consolidador de Investimentos"
description: "Plataforma financeira projetada para centralizar e gerenciar investimentos com visão em tempo real, utilizando microsserviços e um monorepo."
date: "2025-09-05"
repoURL: "https://github.com/ilanzgx/zuno-app"
tags: ["Next.js", "React", "TypeScript", "Java", "Spring Boot", "Python", "FastAPI", "Docker"]
---

O **Zuno** é uma aplicação completa desenhada para centralizar a vida financeira de um investidor. Ele atua como um consolidador de investimentos unificando o portfólio, agregando dados do mercado e entregando uma visão holística do patrimônio.

## 🚀 Tecnologias e Stack

O projeto segue uma arquitetura complexa em **Monorepo**, orquestrando diferentes aplicações de forma simultânea e concorrente:

- **Frontend (Web):** Next.js, React, TypeScript e Tailwind CSS. Desenhado para uso com _Server Components_.
- **Backend Core (API):** Java 21, Spring Boot, PostgreSQL e Redis. Cuida das transações, gerência de carteiras e regra de negócios (CRUD e usuários).
- **Market API (Data Proxy):** Python 3.13 e FastAPI utilizando o `uv`. Um microsserviço dedicado a extrair e rotear _Market Data_ em tempo real da B3 (Ações, FIIs) e Criptomoedas sob demanda.

## 💻 Sobre o Projeto e Funcionalidades

O projeto oferece uma infraestrutura de múltiplas linguagens trabalhando juntas suportadas por **Docker** para lidar com os serviços acessórios.

- Destaques de features:
  - **Visão em Tempo Real:** Performance de portfólio, análise de alocações e controle de histórico de pagamentos de dividendos.
  - **Interface Minimalista:** Uma dashboard focada no usuário final, com gráficos interativos.
  - **Orquestração Integrada:** Todo o stack (Next.js, Spring Boot e Uvicorn/FastAPI) sobe automaticamente de uma só vez pelo gerenciamento unificado através do `npm run dev`.

Este projeto evidencia fortemente a habilidade em conectar e balancear tecnologias em uma arquitetura de microsserviços. Código aberto sob a licença AGPLv3.

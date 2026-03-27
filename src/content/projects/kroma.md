---
title: "Kroma SaaS - Editor de IA"
description: "Plataforma proprietária de manipulação e edição de imagens potencializada por inteligência artificial e visão computacional."
date: "2026-01-05"
---

O **Kroma** é uma plataforma SaaS (Software as a Service) proprietária voltada para manipulação ágil e avançada de imagens via Inteligência Artificial. Para não sobrecarregar fluxos tradicionais da web, sua arquitetura foi segmentada rigorosamente em dois backends distintos capazes de lidar separadamente com as demandas matemáticas e os fluxos de web, otimizando o uso de memória volátil (RAM) provindas dos modelos de IA.

## 🚀 Tecnologias e Stack (Monorepo)

- **Frontend:** Next.js (Node 24 LTS) hospedado na **Vercel** contendo as suítes analíticas em tempo real. Nunca se comunica diretamente com o Worker de imagens.
- **API Core (Fastify):** Backend principal conectado ao **PostgreSQL 17** usando **Drizzle ORM** (Hospedado no **Azure Container Apps**). Ele é o único responsável por receber as requisições do Frontend e orquestrar a delegação de tarefas de imagens.
- **Worker Dedicado (FastAPI):** Backend interno desenvolvido em **Python** e voltado estritamente à manipulação intensiva de pixels com OpenCV2, NumPy e Pillow. Ele é completamente isolado e responde somente ao backend Fastify.
- **Infraestrutura e Segurança:** Autenticação severa via **Google OAuth2** com _Cookies HttpOnly_ Cross-Domain, Deploy automatizado via Docker no Azure, Integração contínua (CI) via GitHub Actions e Testes via **Vitest**.

## 💻 Sobre o Projeto e Arquitetura

O backend foi modelado para escala contínua com a adoção do padrão de projetos de _Factory_, permitindo mock rápido e altíssima cobertura de testes nas regras de negócio (UseCases) criadas em volta do sistema de **"Créditos do usuário"**.

Destaques da Engenharia de Processamento Visual:

- **Inteligência Artificial (Modelos Nativos):** Implementação e configuração dos modelos sem dependência de APIs terceiras como: `rembg` (U2Net) garantindo um recorte exato de fundos e `LapSRN` permitindo "Upscale" esticando imagens em escala 2x ou 4x sem perda de qualidade.
- **Tunning de Memória (Lazy Loading):** Processos de IA e Visão Computacional engolem muita máquina. O Worker de Python foi programado para carregar e limpar _sessions de IA_ dinamicamente na memória principal (`Garbage Collect`), derrubando exponencialmente o custo dos servidores no Azure.
- **Efeitos OpenCV2:** Motores para transformação estética aplicando em milissegundos conversões da sua foto para "Cartoon", "Pintura à Óleo" e "Desenho à lápis".

O Kroma comprova o seu domínio na orquestração de **arquiteturas de múltiplos backends**, separando escopos de rede isolados sem comprometer a resposta e experiência rápida (baixo _latency_) exigida pelo usuário moderno.

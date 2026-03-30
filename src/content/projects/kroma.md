---
title: "Kroma SaaS - Editor de IA"
description: "Plataforma proprietária de manipulação e edição de imagens potencializada por inteligência artificial e visão computacional."
date: "2026-01-05"
tags:
  [
    "Next.js",
    "TypeScript",
    "Fastify",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Docker",
  ]
---

## 🧠 Sobre

O **Kroma** é uma plataforma SaaS proprietária voltada para manipulação ágil e avançada de imagens via Inteligência Artificial. A aplicação resolve o problema de ferramentas pesadas e caras no mercado, oferecendo uma alternativa web rápida e intuitiva para remoção de fundo, upscale e efeitos artísticos.

A arquitetura foi segmentada rigorosamente em dois backends distintos, separando as demandas matemáticas de IA dos fluxos tradicionais da web para otimizar o uso de memória (RAM) e reduzir custos de infraestrutura.

---

## ⚙️ Tecnologias

- **Frontend:** Next.js (Node 24 LTS) hospedado na **Vercel** com suítes analíticas em tempo real
- **API Core:** Fastify conectado ao **PostgreSQL 17** com **Drizzle ORM** (Azure Container Apps)
- **Worker de IA:** FastAPI (Python) com OpenCV2, NumPy e Pillow para processamento intensivo de pixels
- **Autenticação:** Google OAuth2 com Cookies HttpOnly Cross-Domain
- **CI/CD:** GitHub Actions + Deploy via Docker no Azure
- **Testes:** Vitest

---

## ✨ Funcionalidades

- **Remoção de Fundo (IA):** Modelo `rembg` (U2Net) para recorte exato sem APIs terceiras
- **Upscale de Imagens:** Modelo `LapSRN` para ampliar imagens em 2x ou 4x sem perda de qualidade
- **Efeitos Artísticos:** Conversões em milissegundos para Cartoon, Pintura à Óleo e Desenho à Lápis via OpenCV2
- **Sistema de Créditos:** Regras de negócio (UseCases) com padrão Factory e altíssima cobertura de testes
- **Lazy Loading de IA:** Sessions de IA carregadas e limpas dinamicamente via Garbage Collect, reduzindo custo de servidores

---

## 📌 Status

🟡 Em andamento

---

## 👤 Autor

Ilan Fonseca
[github.com/ilanzgx](https://github.com/ilanzgx)

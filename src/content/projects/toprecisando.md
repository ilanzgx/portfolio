---
title: "Tô Precisando (Mobile)"
description: "Um aplicativo mobile para conectar clientes e prestadores de serviço, construído com Expo e React Native."
date: "2025-08-12"
repoURL: "https://github.com/ilanzgx/toPrecisando-mobile"
tags: ["React Native", "Expo", "TypeScript", "Supabase"]
---

O **Tô Precisando** é um aplicativo mobile criado para conectar pessoas que precisam de um serviço com profissionais que o oferecem. Funciona como um "Uber dos serviços": seja um eletricista, encanador ou professor particular, a plataforma permite a publicação de "vagas" detalhadas e o gerenciamento de candidaturas.

## 🚀 Tecnologias e Stack

- **Framework Mobile:** Expo SDK 53 (React Native)
- **Linguagem:** TypeScript 5.8
- **Navegação:** Expo Router (File-based routing)
- **Backend & BaaS:** Supabase
- **Estilização e UI:** NativeWind + Gluestack UI
- **Gerenciamento de Estado:** Zustand
- **Formulários:** React Hook Form + Zod
- **Testes:** Jest + Testing Library

## 💻 Sobre o Projeto e Funcionalidades

A aplicação possui um escopo funcional amplo, oferecendo uma experiência segura, dinâmica e completa para os usuários, contando com:

- **Autenticação Segura:** Login via e-mail/senha, Google e Facebook via Supabase.
- **Gestão de Vagas e Candidaturas:** Controle total para criar vagas e aplicar para serviços.
- **Busca Inteligente:** Motor de busca integrado com filtros por categoria, localização e palavras-chave.
- **Chat e Mensageria em Tempo Real:** Comunicação instantânea entre contratantes e prestadores, com notificações.
- **Identidade Visual Dinâmica:** Suporte completo a Dark Mode (tema claro, escuro e sistema).
- **Cobertura de Testes:** Arquitetura focada em confiabilidade, com testes unitários e de integração (Jest).

O app também está preparado para deploys "Over-The-Air" (OTA Updates) através do ecossistema do Expo, garantindo atualizações instantâneas para os usuários em produção.

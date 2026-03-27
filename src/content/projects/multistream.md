---
title: "Multistream"
description: "Aplicativo desktop cross-platform para assistir múltiplas transmissões ao vivo simultaneamente (Twitch, YouTube, Kick)."
date: "2025-12-22"
repoURL: "https://github.com/ilanzgx/multistream"
---

O **Multistream** é um aplicativo desktop _cross-platform_ (funcionando nativamente em Windows, macOS e Linux) que permite aos usuários assistirem a múltiplas streams ao vivo de plataformas diferentes na mesma tela, unificando a experiência de consumo de conteúdo com chat em tempo real.

## 🚀 Tecnologias e Stack

- **Motor Desktop (Backend):** Tauri 2 e Rust
- **Interface e Lógica (Frontend):** Vue 3 e TypeScript
- **Estilização:** Tailwind CSS
- **Gerenciamento de Pacotes:** Bun

## 💻 Sobre o Projeto e Funcionalidades

O projeto soluciona o problema da fragmentação de transmissões em diferentes portais, integrando os ecossistemas:

- **Plataformas de base:** Suporte simultâneo a **Twitch, Kick e YouTube**.
- **Performance Nativa:** Utilizando `Tauri` em conjunto com `Rust`, o aplicativo se consolida em um pacote muito mais leve e de melhor performance que _frameworks_ tradicionais de desktop web (como Electron).
- **Interface Inteligente:** Telas configuráveis com suporte a chat ao vivo integrado com múltiplas visualizações sem sobrecarregar a memória do computador.

_Software distribuído sob a licença **GPL-3.0**._

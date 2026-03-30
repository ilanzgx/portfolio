---
title: "SpecScan"
description: "Uma ferramenta desktop leve e elegante para inspeção e visualização de hardware, com design Glassmorphism."
date: "2026-03-09"
repoURL: "https://github.com/ilanzgx/SpecScan"
tags: ["Tauri", "Rust", "Vue.js", "TypeScript", "Tailwind CSS"]
---

O **SpecScan** é um utilitário desktop focado na leitura detalhada das informações físicas da sua máquina, entregando dados profundos acompanhados de uma belíssima tela inspirada na tendência de _Glassmorphism_ no Dark Mode.

## 🚀 Tecnologias e Stack

- **Motor Principal (Backend):** Tauri e Rust
- **Hardware Bindings:** Acesso nativo de sistema via `raw-cpuid` e `sysinfo`
- **Frontend / Interface:** Vue 3 (+ Vite) e TypeScript
- **Estilos Visuais:** Tailwind CSS

## 💻 Sobre o Projeto e Funcionalidades

Diferente das interfaces pesadas e antiquadas dos monitores de performance comuns de mercado, o SpecScan foca no essencial de forma nativa:

- **Inspeção Base (CPU):** Extração avançada diretamente dos registradores `CPUID`, trazendo arquitetura, dados de virtualização, cache e métricas térmicas.
- **Rastreamento de Memória RAM:** Varredura ágil sobre os módulos de DIMM ocupados, capacidades e frequências operantes.
- **Armazenamento e Gráficos:** Inspeção da controladora gráfica (placas de vídeo plugadas) e detecção de drivers de discos físicos.
- **Consumo Mínimo de Recursos:** Abandono da premissa Web/Electron em prol de chamadas diretas em Rust providas via o motor leve e seguro do **Tauri**.

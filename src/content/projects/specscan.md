---
title: "SpecScan"
description: "Uma ferramenta desktop leve e elegante para inspeção e visualização de hardware, com design Glassmorphism."
date: "2026-03-09"
repoURL: "https://github.com/ilanzgx/SpecScan"
tags: ["Tauri", "Rust", "Vue.js", "TypeScript", "Tailwind CSS"]
---

## 🧠 Sobre

O **SpecScan** é um utilitário desktop focado na leitura detalhada das informações físicas da sua máquina, entregando dados profundos acompanhados de uma belíssima tela inspirada na tendência de _Glassmorphism_ no Dark Mode.

Diferente das interfaces pesadas e antiquadas dos monitores de performance comuns de mercado, o SpecScan foca no essencial de forma nativa, com consumo mínimo de recursos.

---

## ⚙️ Tecnologias

- **Motor Principal (Backend):** Tauri com Rust
- **Hardware Bindings:** Acesso nativo de sistema via `raw-cpuid` e `sysinfo`
- **Frontend / Interface:** Vue 3 (+ Vite) com TypeScript
- **Estilos Visuais:** Tailwind CSS com Glassmorphism

---

## ▶️ Como rodar

```bash
git clone https://github.com/ilanzgx/SpecScan.git
cd SpecScan
npm install
npm run tauri dev
```

---

## ✨ Funcionalidades

- **Inspeção de CPU:** Extração avançada via registradores `CPUID` — arquitetura, virtualização, cache e métricas térmicas
- **Rastreamento de RAM:** Varredura dos módulos DIMM, capacidades e frequências operantes
- **Armazenamento e Gráficos:** Inspeção da controladora gráfica e detecção de drivers de disco
- **Consumo Mínimo:** Chamadas diretas em Rust via Tauri, sem overhead de Electron

---

## 📌 Status

🟡 Em andamento

---

## 👤 Autor

Ilan Fonseca
[github.com/ilanzgx](https://github.com/ilanzgx)

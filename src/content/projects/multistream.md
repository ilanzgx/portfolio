---
title: "Multistream"
description: "Aplicativo desktop cross-platform para assistir múltiplas transmissões ao vivo simultaneamente (Twitch, YouTube, Kick)."
date: "2025-12-22"
repoURL: "https://github.com/ilanzgx/multistream"
tags: ["Tauri", "Rust", "Vue.js", "TypeScript", "Tailwind CSS"]
---

## 🧠 Sobre

O **Multistream** é um aplicativo desktop _cross-platform_ que permite assistir múltiplas streams ao vivo de plataformas diferentes na mesma tela, unificando a experiência de consumo de conteúdo com chat em tempo real.

O projeto resolve o problema da fragmentação de transmissões em portais diferentes, eliminando a necessidade de alternar entre abas e janelas.

---

## ⚙️ Tecnologias

- **Motor Desktop (Backend):** Tauri 2 com Rust
- **Interface e Lógica (Frontend):** Vue 3 com TypeScript
- **Estilização:** Tailwind CSS
- **Gerenciamento de Pacotes:** Bun

---

## 📸 Imagens

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
  <img src="/portfolio/images/projects/multistream/image_1.png" alt="Dashboard do Multistream" class="w-full h-full object-cover rounded-lg border border-black/10 dark:border-white/10 !m-0" data-zoomable />
  <img src="/portfolio/images/projects/multistream/image_2.png" alt="Visualização do Multistream" class="w-full h-full object-cover rounded-lg border border-black/10 dark:border-white/10 !m-0" data-zoomable />
</div>

---

## ▶️ Como rodar

```bash
git clone https://github.com/ilanzgx/multistream.git
cd multistream
bun install
bun run tauri dev
```

---

## ✨ Funcionalidades

- **Multi-plataforma:** Suporte simultâneo a **Twitch, Kick e YouTube**
- **Performance Nativa:** Tauri + Rust resulta em um pacote muito mais leve que Electron
- **Interface Inteligente:** Telas configuráveis com chat ao vivo integrado e múltiplas visualizações

---

## 📌 Status

🟡 Em andamento

---

## 👤 Autor

Ilan Fonseca
[github.com/ilanzgx](https://github.com/ilanzgx)

_Software distribuído sob a licença **GPL-3.0**._

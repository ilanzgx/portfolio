---
title: "Ecommerce Laravel"
description: "Uma loja virtual moderna e completa construída com Laravel 8, Inertia.js e Vue.js."
date: "2022-01-15"
repoURL: "https://github.com/ilanzgx/ecommerce-laravel"
tags: ["Laravel", "PHP", "Vue.js", "Inertia.js", "MySQL"]
---

## 🧠 Sobre

Uma loja virtual completa projetada para entregar uma experiência de navegação rápida (SPA) utilizando a força do PHP com o ecossistema reativo do Vue.

O projeto foi construído seguindo o padrão de arquitetura **MVC** do Laravel, demonstrando a criação fluida de uma aplicação web sem a necessidade de construir uma API RESTful separada, usando o **Inertia.js** como ponte direta entre o Laravel e o Vue.

---

## ⚙️ Tecnologias

- **Backend:** Laravel 8 (PHP 7.4) com arquitetura MVC
- **Frontend:** Vue.js 2.5 acoplado via Inertia.js
- **Banco de Dados:** MySQL
- **Gestão de Pacotes:** Composer e NPM
- **Pagamentos:** Integração com Mercado Pago

---

## 📸 Imagens

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
  <img src="/images/projects/ecommerce-laravel/image_1.png" alt="Dashboard principal Zuno" class="w-full h-full object-cover rounded-lg border border-black/10 dark:border-white/10 !m-0" data-zoomable />
  <img src="/images/projects/ecommerce-laravel/image_2.png" alt="Visualização da carteira 1" class="w-full h-full object-cover rounded-lg border border-black/10 dark:border-white/10 !m-0" data-zoomable />
  <img src="/images/projects/ecommerce-laravel/image_3.png" alt="Visualização comparador de carteira 2" class="col-span-1 md:col-span-2 w-full h-auto object-cover rounded-lg border border-black/10 dark:border-white/10 !m-0" data-zoomable />
</div>

---

## ▶️ Como rodar

```bash
git clone https://github.com/ilanzgx/ecommerce-laravel.git
cd ecommerce-laravel
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
npm run dev
```

---

## ✨ Funcionalidades

- **Sistema de avaliações:** Feedback dos produtos pelos compradores
- **Ativação de conta por E-mail:** Segurança no cadastro de novos usuários
- **Webhook Mercado Pago:** Detecção automática do status dos pedidos
- **Backoffice completo:** Gestão administrativa total da loja
- **Totalmente Responsivo:** Design adaptado para Mobile
- **Checkout:** Fluxo final de compra com gateway de recebimentos configurável

---

## 📌 Status

🟢 Concluído

---

## 👤 Autor

Ilan Fonseca
[github.com/ilanzgx](https://github.com/ilanzgx)

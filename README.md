# Stride — Sneaker E-Commerce Storefront

Stride is a front-end e-commerce storefront for sneakers, built with React and Tailwind CSS. It covers the core shopping flow — browsing, filtering, and cart management — with an emphasis on real-world data-fetching states (loading/error/skeleton) and persistent cart state via `localStorage`.

**Live demo:** stride-shoe-store.netlify.app

## Features

- **Product catalog fetched at runtime** — products are loaded from a JSON source on mount, with dedicated loading, error, and success states handled through a reducer (no hardcoded product arrays).
- **Category filtering** on the Shop page (All / Training / Running / Lifestyle) using `useMemo` to avoid recomputation on every render.
- **Cart management via Context API + `useReducer`** — add to cart, increase/decrease quantity (capped between 1 and 10), remove item, and clear cart, all as reducer actions.
- **Persistent cart** — cart state is synced to `localStorage` on every change and rehydrated on load, so items survive a page refresh.
- **Order summary logic** — subtotal, conditional shipping (free above ₹30,000, flat ₹299 below), and estimated tax, calculated live from cart contents.
- **Featured products section** on the homepage, filtered from the same product set as the shop page.
- **Responsive, dark-themed UI** built with Tailwind CSS v4, with a custom red/black color system and gradient banner treatments.
- **Client-side routing** with `react-router` (Home, Shop, Cart, About).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| Routing | React Router 8 |
| State management | Context API + `useReducer` |
| Carousels / marquee | Swiper, react-fast-marquee |
| Linting | ESLint 9 |

## Project Structure

```
src/
├── components/       # Reusable UI: Navbar, Footer, Card, CartCard, HeroSection, etc.
├── context/          # CartContext — provides global cart & product state
├── reducer/          # CartReducer — handles all cart/product actions
├── pages/            # Route-level pages: Shop, Cart, About
├── App.jsx           # Route definitions
└── main.jsx          # Entry point
public/
└── products.json     # Product data source, fetched at runtime
```

## Getting Started

```bash
# Clone the repo
git clone [github-repo-link-here]
cd stride-ecommerce

# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

## What This Project Demonstrates

This project was built to practice patterns that come up in real production apps rather than tutorial-style demos:

- Handling async data fetching properly (loading/error/success states) instead of assuming data is always there.
- Centralizing cross-cutting state (cart) with Context + `useReducer` instead of prop-drilling or scattered `useState`.
- Persisting state across sessions with `localStorage`, including safely parsing/recovering from corrupted storage.
- Deriving computed values (filtered lists, cart totals) with `useMemo`/reducers rather than storing redundant state.

## Notes

- Product images and data are static/mocked for demo purposes — there is no backend or payment integration.
- Checkout is simulated (clears the cart and shows a confirmation popup) rather than processing real payments.

## License

This project is for portfolio/demonstration purposes.

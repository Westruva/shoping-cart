# MyStore Shopping Cart

A responsive React shopping cart for browsing tech essentials such as keyboards,
headphones, and workspace accessories. Products are loaded from the Fake Store
API, and the cart updates immediately as products are added or quantities change.

## Features

- Home page with a storefront hero section and service highlights
- Shop catalog with product images, categories, prices, loading, and error states
- Add products to the cart, including quantity consolidation for duplicate items
- Increase or decrease item quantities
- Remove individual items or clear the entire cart
- Live cart item count, subtotal, and order summary
- Empty-cart state with a link back to the shop
- Responsive layout built with Tailwind CSS utilities
- React Router routes for home, shop, cart, not-found, and error pages
- Shared cart state managed with React Context

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- Fake Store API

## Routes

| Route   | Description                     |
| ------- | ------------------------------- |
| `/`     | Storefront home page            |
| `/shop` | Product catalog                 |
| `/cart` | Shopping cart and order summary |
| `/*`    | Not-found page                  |

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the application for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Notes

The shop depends on the public Fake Store API at
`https://fakestoreapi.com/products`. An internet connection is required for the
catalog to load. The checkout button currently displays a placeholder alert;
there is no payment or order submission flow yet.

# README.md

# EBRA Store Premium

## Overview

EBRA Store Premium is a modern, feature‑rich e‑commerce web application built using Next.js 14, TypeScript, Tailwind CSS, and Zustand for global state management. This project was developed as part of a full‑stack assessment, showcasing the ability to architect, design, and implement a functional online shopping experience. The application allows users to browse products, view detailed descriptions, and manage a shopping cart with persistent state across the browsing session.

The visual theme of EBRA Store Premium is designed to provide a luxury feel, utilizing a soft beige color palette combined with gold gradient accents and the Poppins font to deliver elegance and readability.

This README covers installation, features, architecture, state management, performance considerations, edge cases, future enhancement plans, and a complete usage guide.

---

## Table of Contents

1. Features
2. Technologies Used
3. Getting Started
4. Pages Overview
5. Cart Management Logic
6. API Consumption
7. Error Handling
8. Loading State Handling
9. Responsive Design
10. Code Quality and Practices
11. Edge Cases Handling
12. Contribution Guidelines
13. Future Improvements
14. Known Limitations
15. Deployment Instructions
16. License

---

## 1. Features

EBRA Store Premium includes a comprehensive set of features expected from modern online commerce platforms:

* Modern, responsive interface built with Tailwind CSS
* Browse products via API integration
* View specific product details with images, pricing, descriptions, and categories
* Add products to a persistent shopping cart
* Remove products from the cart
* Dynamic calculation of total pricing
* Elegant sticky navigation bar
* Footer component for complete layout support
* Toast notifications for user actions
* Lightweight state management using Zustand
* Optimized for desktop, tablet, and mobile
* Works on all major operating systems
* Zero environment configuration required

---

## 2. Technologies Used

| Technology              | Purpose                                     |
| ----------------------- | ------------------------------------------- |
| Next.js 14 (App Router) | Routing, page rendering, server integration |
| TypeScript              | Type‑safe development                       |
| Tailwind CSS            | Utility‑based styling                       |
| Zustand                 | Cart state management                       |
| React Hot Toast         | User feedback notifications                 |
| Fake Store API          | Product data source                         |

---

## 3. Getting Started

Follow these steps to quickly set up and run EBRA Store Premium on your local machine.

### Prerequisites

* **Node.js** version 18 or higher
* **npm** installed globally
* Optional: **Visual Studio Code** or any code editor for development

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Vx9a/ebra-store-premium.git
```

2. Navigate into the project directory:

```bash
cd ebra-store-premium
```

3. Install dependencies:

```bash
npm install
```

### Running the Development Server

Start the application in development mode with:

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:3000
```

You should now see the EBRA Store Premium homepage with product listings.

### Environment Configuration

* No additional environment setup is required for the Fake Store API.
* For custom API endpoints, create a `.env` file at the root and define:

```bash
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

### Folder Overview

* **`app/`** — Contains pages and routing
* **`components/`** — Reusable UI components
* **`store/`** — Global state management using Zustand
* **`lib/`** — Helper functions and API requests
* **`styles/`** — Tailwind CSS and global styles
* **`public/`** — Static assets (images, icons)
* **Configuration files** — Tailwind, TypeScript, package.json

### Next Steps

After setup, you can:

* Explore product browsing
* Test cart functionality
* Add or remove items
* Observe dynamic pricing updates

This section ensures developers can start using and contributing to EBRA Store Premium immediately.

---

## 4. Pages Overview

### Product List (`/`)

Displays all available products using the Fake Store API. Users can:

* View product images
* Read titles
* Check pricing
* Click for detailed view

### Product Details (`/product/[id]`)

Includes:

* Large product image
* Accurate pricing details
* Full description
* Category information
* Add‑to‑cart functionality

### Cart Page (`/cart`)

Allows users to:

* Review selected products
* Remove products from the cart
* View the aggregated total cost

---

## 5. Cart Management Logic

Zustand is used to manage the cart globally without prop drilling. The cart maintains:

* Unique product identification
* Quantity increments if product already exists
* State persistence during navigation

Cart calculations update dynamically and reflect accurate totals even during fast interactions.

---

## 6. API Consumption

EBRA Store Premium integrates with:
[https://fakestoreapi.com/docs](https://fakestoreapi.com/docs)

Endpoints used:

* `GET /products` — fetch all products
* `GET /products/:id` — fetch a single product by identifier

The application handles asynchronous requests while ensuring proper loading UI.

---

## 7. Error Handling

Robust error handling ensures a reliable user experience:

* API fetch failures trigger user‑friendly error messages
* Network interruptions are gracefully handled
* Invalid product identifiers return fallback UI
* Removing nonexistent cart items is safely ignored

---

## 8. Loading State Handling

Next.js Route segments introduce built‑in loading behavior. The application uses:

* Spinners
* Skeleton placeholders

This preserves visual continuity for slower network connections.

---

## 9. Responsive Design

The layout automatically adjusts via Tailwind breakpoints:

* Mobile navigation collapses appropriately
* Product cards resize fluidly
* Cart view remains comfortably readable

The design was tested on:

* Desktop (Full HD)
* iPad resolution
* Mobile (iPhone widths)

---

## 10. Code Quality and Practices

Best practices applied:

* Meaningful variable naming
* TypeScript models for product objects
* Avoidance of any unless necessary
* Clean, reusable components
* Consistent formatting conventions

This improves readability, maintenance, and scalability.

---

## 11. Edge Cases Handling

The following situations are explicitly controlled:

| Edge Case                    | System Behavior                                   |
| ---------------------------- | ------------------------------------------------- |
| Adding duplicate product     | Increases quantity instead of duplicating entries |
| Removing nonexistent product | Ignored safely without crash                      |
| API outage                   | Displays error notification                       |
| Slow responses               | Shows loading skeletons                           |

---

## 12. License

This project is distributed under the MIT License.

---

## Credits

Developed by Lara Madkhali

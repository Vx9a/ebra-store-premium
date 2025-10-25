# EBRA Store Premium

## Credits

Developed by Lara Madkhali

## Overview

EBRA Store Premium is a modern, feature‑rich e‑commerce web application built using Next.js 14, TypeScript, Tailwind CSS, and Zustand for global state management. This project was developed as part of a full‑stack assessment, showcasing the ability to architect, design, and implement a functional online shopping experience. The application allows users to browse products, view detailed descriptions, and manage a shopping cart with persistent state across the browsing session.

The visual theme of EBRA Store Premium is designed to provide a luxury feel, utilizing a soft beige color palette combined with gold gradient accents and the Poppins font to deliver elegance and readability.

This README covers installation, features, architecture, state management, performance considerations, edge cases, future enhancement plans, and a complete usage guide.

---

## Table of Contents

1. Features
2. Technologies Used
3. Project Structure
4. Getting Started
5. Pages Overview
6. Cart Management Logic
7. API Consumption
8. Error Handling
9. Loading State Handling
10. Responsive Design
11. Code Quality and Practices
12. Edge Cases Handling
13. Contribution Guidelines
14. Future Improvements
15. Known Limitations
16. Deployment Instructions
17. License

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

## 3. Project Structure

Below is an improved visual representation of the project's file structure to enhance readability and clarity:

```
ebra-store-premium/
│
├── app/                      # Application routing and page files
│   ├── page.tsx              # Product list page (home)
│   ├── cart/
│   │   └── page.tsx          # Shopping cart page
│   └── product/
│       └── [id]/
│           └── page.tsx      # Dynamic product details
│
├── components/               # Reusable UI components
│   ├── Navbar.tsx            # Sticky top navigation bar
│   ├── Footer.tsx            # Footer component
│   ├── ProductCard.tsx       # Product preview card layout
│   ├── ProductDetails.tsx    # Detailed product information view
│   └── CartItem.tsx          # Individual cart item display
│
├── store/                    # Global state management (Zustand)
│   └── cart.ts               # Cart store logic and actions
│
├── lib/                      # Utility and helper functions
│   └── api.ts                # API request handlers
│
├── styles/                   # Global and tailwind styles
│   └── globals.css           # Global CSS overrides
│
├── public/                   # Static assets (images, icons, etc.)
│
├── tailwind.config.ts        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependency and script definitions
└── README.md                 # Project documentation
```

---

## 4. Getting Started

Follow these steps to install and run the application locally:

### Prerequisites

* Node.js version 18+
* npm installed on your system

### Installation

```
npm install
```

### Run Development Server

```
npm run dev
```

### Access Application

After the terminal reports successful startup, visit:

```
http://localhost:3000
```

---

## 5. Pages Overview

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

## 6. Cart Management Logic

Zustand is used to manage the cart globally without prop drilling. The cart maintains:

* Unique product identification
* Quantity increments if product already exists
* State persistence during navigation

Cart calculations update dynamically and reflect accurate totals even during fast interactions.

---

## 7. API Consumption

EBRA Store Premium integrates with:
[https://fakestoreapi.com/docs](https://fakestoreapi.com/docs)

Endpoints used:

* `GET /products` — fetch all products
* `GET /products/:id` — fetch a single product by identifier

The application handles asynchronous requests while ensuring proper loading UI.

---

## 8. Error Handling

Robust error handling ensures a reliable user experience:

* API fetch failures trigger user‑friendly error messages
* Network interruptions are gracefully handled
* Invalid product identifiers return fallback UI
* Removing nonexistent cart items is safely ignored

---

## 9. Loading State Handling

Next.js Route segments introduce built‑in loading behavior. The application uses:

* Spinners
* Skeleton placeholders

This preserves visual continuity for slower network connections.

---

## 10. Responsive Design

The layout automatically adjusts via Tailwind breakpoints:

* Mobile navigation collapses appropriately
* Product cards resize fluidly
* Cart view remains comfortably readable

The design was tested on:

* Desktop (Full HD)
* iPad resolution
* Mobile (iPhone widths)

---

## 11. Code Quality and Practices

Best practices applied:

* Meaningful variable naming
* TypeScript models for product objects
* Avoidance of any unless necessary
* Clean, reusable components
* Consistent formatting conventions

This improves readability, maintenance, and scalability.

---

## 12. Edge Cases Handling

The following situations are explicitly controlled:

| Edge Case                    | System Behavior                                   |
| ---------------------------- | ------------------------------------------------- |
| Adding duplicate product     | Increases quantity instead of duplicating entries |
| Removing nonexistent product | Ignored safely without crash                      |
| API outage                   | Displays error notification                       |
| Slow responses               | Shows loading skeletons                           |

---

## 13. License

This project is distributed under the MIT License.

## Credits

Developed by Lara Madkhali

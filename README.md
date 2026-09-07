# 🛍️ MyApniDukaan — E-Commerce Frontend

A modern, responsive e-commerce frontend built with **React.js** and **Vite**. MyApniDukaan provides a clean shopping experience where users can browse products, view product details, add items to a cart, and manage their shopping journey through a simple and responsive interface.

🔗 **Live Demo:** https://my-apni-dukaan.vercel.app

🔗 **GitHub Repository:** https://github.com/bhupendrar1/MyApniDukaan

---

## ✨ Features

- 🏠 Responsive home page
- 🛍️ Product browsing and product cards
- 🔎 Product detail pages
- 🛒 Add and manage products in the shopping cart
- ⭐ Recommended products section
- 🧭 Client-side navigation with React Router
- 🌓 Theme support using React Context
- 📱 Responsive and user-friendly UI
- ⚡ Fast development and production builds with Vite
- 🧩 Reusable React components
- 🎨 Component-level styling with CSS Modules

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React.js 19** | Frontend UI development |
| **Vite** | Development server and build tool |
| **React Router DOM** | Client-side routing |
| **Redux Toolkit** | State management |
| **React Redux** | Connecting Redux with React |
| **React Context API** | Theme/state context |
| **CSS / CSS Modules** | Styling and responsive UI |
| **ESLint** | Code quality and linting |

The project dependencies and scripts are defined in the `eCartReact/package.json` file. fileciteturn5file0

---

## 📂 Project Structure

```text
MyApniDukaan/
│
├── README.md
│
└── eCartReact/
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    │
    ├── src/
    │   ├── assets/
    │   │   └── hero.png
    │   │
    │   ├── component/
    │   │   ├── Card/
    │   │   ├── Cart/
    │   │   ├── Footer/
    │   │   ├── Home/
    │   │   ├── Navbar/
    │   │   ├── ProductDetail/
    │   │   └── RecommendedCard/
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   └── ThemeContext.jsx
    │
    ├── index.html
    ├── package.json
    ├── package-lock.json
    └── eslint.config.js
```

The current application includes dedicated components for the home page, navigation bar, cart, product details, recommended products, and footer. fileciteturn4file0

---

## 🚦 Application Routes

The application currently uses React Router for the following routes:

| Route | Description |
|---|---|
| `/` | Home page |
| `/cart` | Shopping cart |
| `/detail/:id` | Product details |

These routes are configured in `src/App.jsx`. fileciteturn6file0

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bhupendrar1/MyApniDukaan.git
```

### 2. Navigate to the React application

```bash
cd MyApniDukaan/eCartReact
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide a local URL in the terminal.

---

## 📦 Available Scripts

Inside the `eCartReact` directory:

```bash
# Start development server
npm run dev

# Create production build
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

These scripts are configured in the project's package configuration. fileciteturn5file0

---

## 🛒 How It Works

1. Open the application.
2. Browse the available products on the home page.
3. Select a product to view its details.
4. Add products to the shopping cart.
5. Open the cart to review selected products.
6. Continue exploring products or manage the cart as required.

---

## 🎯 Project Goals

MyApniDukaan was developed to demonstrate practical frontend development concepts including:

- Component-based architecture
- React state management
- Client-side routing
- Reusable UI components
- Responsive web design
- Theme/context management
- Modern frontend development using Vite

---

## 🔮 Future Improvements

Potential enhancements for future versions include:

- 🔐 Complete user authentication
- 💳 Payment gateway integration
- 📦 Order placement and order tracking
- 👨‍💼 Admin dashboard
- 🔍 Advanced product search and filtering
- ⭐ Product reviews and ratings
- ❤️ Wishlist functionality
- 🔔 Order and product notifications
- 🌐 Backend API integration
- 🗄️ Persistent database integration

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m "Add your feature"
```

5. Push the branch:

```bash
git push origin feature/your-feature
```

6. Open a Pull Request.

---

## 👨‍💻 Author

**Bhupendra Singh**

- GitHub: https://github.com/bhupendrar1
- Project: https://github.com/bhupendrar1/MyApniDukaan

---

## 📄 License

This project currently does not specify a license.

---

⭐ If you find this project useful, consider giving the repository a star!

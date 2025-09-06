
# Charming Moments - Frontend

Welcome to the frontend repository for Charming Moments, a delightful e-commerce platform for handcrafted goods and sweet treats. This project is a modern, responsive, and feature-rich web application built with React, Vite, and TypeScript, offering a seamless and engaging user experience.


## ✨ Features

* **Modern Tech Stack**: Built with the latest technologies like React 19, Vite, and TypeScript for a fast, efficient, and scalable application.
* **Responsive Design**: A fully responsive and mobile-first user interface crafted with Tailwind CSS, ensuring a great experience on all devices.
* **Theming**: A customizable theming system with support for light and dark modes, as well as multiple color themes, managed with Zustand and CSS variables.
* **State Management**: Centralized and predictable state management using Zustand for cart, products, and theme.
* **Routing**: Client-side routing with React Router, featuring lazy loading for pages to improve initial load times.
* **E-commerce Functionality**:
    * Product listings with filtering and sorting options.
    * Product detail pages with image zoom and related products.
    * A fully functional shopping cart with add, remove, and update quantity features.
    * A streamlined checkout process that integrates with WhatsApp for order placement.
* **Admin Panel**: A dedicated admin page for managing products, including creating, updating, and deleting items, with image uploads to Cloudinary.
* **Form Handling and Validation**: Robust form handling with validation for the address and contact forms.
* **Code Quality**: A consistent and clean codebase maintained with ESLint and Prettier.

## 🚀 Tech Stack

* **Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **State Management**: [Zustand](https://github.com/pmndrs/zustand)
* **Routing**: [React Router](https://reactrouter.com/)
* **HTTP Client**: [Axios](https://axios-http.com/)
* **Image Uploads**: [Cloudinary](https://cloudinary.com/)
* **Linting**: [ESLint](https://eslint.org/)
* **Formatting**: [Prettier](https://prettier.io/)

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (version 18.x or higher)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/beingatushar/charming-moments-frontend.git](https://github.com/beingatushar/charming-moments-frontend.git)
    cd charming-moments-frontend
    ```

2.  **Install the dependencies:**
    ```sh
    npm install
    ```

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables. You can get the necessary values from your backend and Cloudinary setup.

```env
# Backend Configuration
VITE_BACKEND_URL=http://localhost:8000
VITE_BASE_URL=http://localhost:5173

# API Configuration
VITE_PINCODE_API_URL=[https://api.postalpincode.in/pincode](https://api.postalpincode.in/pincode)

# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
VITE_CLOUDINARY_API_URL=[https://api.cloudinary.com/v1_1](https://api.cloudinary.com/v1_1)

# Cart Configuration
VITE_MAX_CART_ITEMS=100
VITE_MAX_ITEM_QUANTITY=10
VITE_CART_LOCALSTORAGE_KEY=cart-storage

# Contact Configuration
VITE_CONTACT_PHONE=your_whatsapp_phone_number
````

### Running the Project

To start the development server, run the following command:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📜 Available Scripts

In the project directory, you can run:

  * `npm run dev`: Runs the app in development mode.
  * `npm run build`: Builds the app for production to the `dist` folder.
  * `npm run preview`: Serves the production build locally.
  * `npm run lint`: Lints the project files using ESLint.
  * `npm run format`: Formats the project files using Prettier.

## 📁 Project Structure

```
charming-moments-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   └── ...
│   ├── pages/
│   ├── services/
│   ├── stores/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── .env
├── .gitignore
├── index.html
├── package.json
└── ...
```

  * **`public/`**: Contains static assets that are not processed by Vite.
  * **`src/assets/`**: Images, icons, and other static assets.
  * **`src/components/`**: Reusable React components.
      * **`common/`**: Generic components like Layout, Header, Footer, etc.
  * **`src/pages/`**: Page components for each route.
  * **`src/services/`**: API service for interacting with the backend and Cloudinary.
  * **`src/stores/`**: Zustand stores for state management.
  * **`src/types/`**: TypeScript type definitions.
  * **`src/utils/`**: Utility functions.
  * **`App.tsx`**: The root component with routing setup.
  * **`main.tsx`**: The entry point of the application.
  * **`styles.css`**: Global styles and Tailwind CSS configuration.

## 🚀 Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration for building and routing. To deploy, simply connect your Git repository to Vercel and it will automatically build and deploy the application.

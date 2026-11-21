# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
https://practica7-react-peliculass.netlify.app
# Práctica 7 - Aplicación Web de Películas con React, Vite, GitHub y Netlify

## 1. Integrantes del Equipo
* Plascencia Gutierrez Irving Yosef *(Modalidad Individual)*

## 2. Objetivo
Desarrollar una aplicación web de una sola página (SPA) en React utilizando Vite como entorno de desarrollo, capaz de consumir datos en tiempo real desde la API externa de The Movie Database (TMDB) para desplegar un catálogo de películas y la vista de detalle de cada una, aplicando control de versiones en GitHub y despliegue continuo en Netlify.

## 3. Tecnologías Utilizadas
* **React** (Componentes funcionales, Props y Hooks `useState` / `useEffect`)
* **Vite** (Entorno de desarrollo y empaquetado para producción)
* **React Router DOM** (Enrutamiento declarativo en el cliente)
* **TMDB API v3** (Consumo de datos externos en formato JSON mediante `fetch`)
* **CSS3** (Diseño responsivo con CSS Grid y Flexbox)
* **Git y GitHub** (Control de versiones)
* **Netlify** (Despliegue y alojamiento en la nube)

## 4. Estructura General del Proyecto
```text
practica7-react-peliculas/
├── public/
│   ├── _redirects          # Configuración de rutas SPA para Netlify
│   └── escudo-cucei.png    # Escudo institucional para el pie de página
├── src/
│   ├── components/
│   │   ├── Footer.jsx      # Pie de página con datos académicos y escudo CUCEI
│   │   ├── MovieCard.jsx   # Tarjeta individual con póster y título de película
│   │   └── MovieGrid.jsx   # Cuadrícula que renderiza el listado de películas
│   ├── pages/
│   │   ├── LandingPage.jsx # Vista principal del catálogo
│   │   └── MovieDetails.jsx# Vista de detalle dinámico por película
│   ├── routers/
│   │   └── AppRouter.jsx   # Definición de rutas con BrowserRouter
│   ├── services/
│   │   └── httpClient.js   # Cliente HTTP con fetch y variables de entorno
│   ├── utils/
│   │   └── getMovieImg.js  # Función auxiliar para construir URLs de pósters
│   ├── App.jsx             # Estructura principal de la aplicación
│   ├── index.css           # Estilos globales y responsivos
│   └── main.jsx            # Punto de entrada de React
├── .env                    # Variables de entorno locales (ignorado en Git)
├── .gitignore              # Exclusión de node_modules y .env
└── package.json            # Dependencias y scripts del proyecto
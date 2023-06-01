# PersonalProjects

Este repositorio lo utilizaré como uno principal donde iré subiendo pequeños proyectos personales que realice para hacer pruebas, pequeños retos, prácticas de funcionalidades nuevas, etc.

Crear nuevo Proyecto:
    - Instalar Node.js -> https://nodejs.org/es/download
    - Instalar npm -> npm install   
    - Comprobar que se ha instalado -> node -v; npm -v
    - Crear la carpeta principal del repositorio GitHub
    - Inicializar proyecto -> npm init -y
    - Crear una carpeta principal para guardar los diferentes proyectos
    - Instalar en ella Vite (empaquetador) -> npm create vite@latest
    - Escoger el nombre del proyecto, React y JavaScript + SWC (transpilador)
    - Instalar dependencias -> npm i
    - Inicializar proyecto -> npm run dev
    - Eliminar App.css, App.jsx e index.css o dejarlas vacías

Heroicons
unavatar.io
canvas confetti => npm install canvas-confetti -E
inter standard => npm install standard -D (a nivel de proyecto y para congigurarlo, ir al package.json y añadir "devDependencies": {
    "standard": "^17.1.0"
  },
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  } y tener la extensión eslint) y/o? buscar extensión StandardJS

Pasar proyecto a producción:
  - npm run build
  - buscar https://app.netlify.com/drop/
  - dropear la carpeta dist creada en la misma ruta del proyecto en la página

Crear proyecto React desde 0 con vite:
  - npm create vite@latest
  - npm i @vitejs/plugin-react -E (intalar el plugin) -E es la versión exacta
  - npm i react react-dom -E  (instalar react y react-dom)
  - crear dentro del proyecto vite.config.js

Tests con playwright:
  - npm init playwright@latest
  - eliminar test.examples
  - test end to end (el más importante)
  - hacer una constante con la ruta local
  - cambiar extensión de playwright.config.js a .cjs
  - cambiar primer import de example.spec.js
  - iniciar los tests con -> npx playwright test

Estilos básicos con Water.css:
  - ir a -> https://watercss.kognise.dev/
  - copiar el href -> https://cdn.jsdelivr.net/npm/water.css@2/out/water.css en el navegador
  - copiar esos estilos en el index.css

Debounce:
  - npm i just-debounce-it -E
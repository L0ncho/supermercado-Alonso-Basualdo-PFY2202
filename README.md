# Supermercado El Ahorro: gestión de inventario

Aplicación web de una sola página (SPA) para consultar el inventario de un supermercado: muestra los productos, su precio, su stock y cuáles necesitan reposición.

Actividad formativa 1, Desarrollo Frontend II (PFY2202), Duoc UC.

## Tecnologías


| Tecnología   | Versión | Uso                                         |
| ------------ | ------- | ------------------------------------------- |
| React        | 19.3.1  | Interfaz basada en componentes              |
| React Router | 8.5.0   | Navegación entre páginas (modo declarativo) |
| Vite         | 8.3.4   | Servidor de desarrollo y build              |
| ESLint       | 10.13.0 | Análisis estático del código                |


- Lenguajes: JavaScript (JSX), HTML y CSS, sin TypeScript ni librerías de UI.
- React Router 8 se instala y se importa como `react-router`; reemplaza al paquete `react-router-dom` de versiones anteriores.



### Diferencias con la guía de aprendizaje

La guía de la semana usa herramientas que cambiaron desde su publicación. Este proyecto usa sus equivalentes actuales, manteniendo los mismos conceptos:


| En la guía                                          | En este proyecto                  | Motivo                                                                                                        |
| --------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Create React App (`npx create-react-app`)           | Vite                              | Create React App fue deprecado oficialmente por el equipo de React en febrero de 2025                         |
| React Router v6 con `react-router-dom`              | React Router 8 con `react-router` | Es la versión actual. v8 eliminó el paquete `react-router-dom` y v6 ya no recibe actualizaciones de seguridad |
| `useHistory`                                        | `useNavigate`                     | `useHistory` pertenece a React Router v5 y no existe desde v6                                                 |
| Leer el parámetro cortando `useLocation().pathname` | `useParams`                       | Forma oficial de leer parámetros de rutas dinámicas como `/productos/:id`                                     |
| `import React from 'react'` para usar JSX           | Sin ese import                    | Desde React 17 el JSX no requiere importar React                                                              |


Los componentes y hooks que evalúa la actividad (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useNavigate`) se usan igual que en la guía; solo cambia el paquete desde donde se importan.

## Funcionalidades

- Inventario en tabla con filtro por categoría.
- Resumen con el total de productos y cuántos requieren reposición.
- Estado de stock por producto: Disponible, Stock Bajo o Agotado, con insignias de color.
- Página de detalle de cada producto, con mensaje si el producto no existe.
- Páginas informativas: Quiénes somos y Cómo comprar.
- Página 404 para rutas inexistentes.
- Menú inferior fijo que marca la página activa.
- Diseño responsive: en móvil la tabla del inventario se muestra como tarjetas.



## Rutas


| Ruta             | Componente        | Descripción                                |
| ---------------- | ----------------- | ------------------------------------------ |
| `/`              | `Inicio`          | Inventario con filtro por categoría        |
| `/productos/:id` | `DetalleProducto` | Detalle de un producto (ruta dinámica)     |
| `/quienes-somos` | `QuienesSomos`    | Historia, misión, visión y valores         |
| `/como-comprar`  | `ComoComprar`     | Pasos de compra, medios de pago y despacho |
| `*`              | `NoEncontrado`    | Cualquier ruta que no existe (404)         |


Todas las rutas se muestran dentro del componente `Layout`.

## Implementación de la navegación


| Elemento               | Dónde                    | Para qué                                                                                                                                                    |
| ---------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BrowserRouter`        | `src/main.jsx`           | Envuelve a `App` y habilita el enrutamiento con URLs normales                                                                                               |
| `Routes` y `Route`     | `src/App.jsx`            | Definen las rutas de forma declarativa                                                                                                                      |
| Ruta layout + `Outlet` | `App.jsx` y `Layout.jsx` | Una ruta sin `path` con `element={<Layout />}` agrupa a las demás; `Outlet` indica dónde se dibuja la página actual, entre el encabezado y el menú inferior |
| Ruta `index`           | `App.jsx`                | Muestra `Inicio` en `/`                                                                                                                                     |
| `NavLink`              | `MenuInferior.jsx`       | Agrega la clase `active` y `aria-current="page"` al enlace de la página actual; en `/` se usa `end` para que no quede activo en todas las rutas             |
| `useParams`            | `DetalleProducto.jsx`    | Lee el `:id` de la URL                                                                                                                                      |
| `useNavigate`          | `NoEncontrado.jsx`       | El botón "Volver atrás" ejecuta `navigate(-1)`                                                                                                              |
| `Link`                 | Todas las páginas        | Enlaces internos sin recargar la página                                                                                                                     |


- **Por qué** `Number(id)`**:** `useParams` siempre entrega texto (`"7"`), pero los `id` de los productos son números. `obtenerProductoPorId` convierte el valor con `Number()` para que la comparación estricta con `===` funcione.
- **Por qué** `Link` **y no** `<a>`**:** un `<a href>` recarga toda la aplicación y pierde el estado; `Link` cambia la URL y React solo vuelve a renderizar la página.



## Estructura del proyecto

```
src/
├── components/   Componentes reutilizables: Layout y MenuInferior, cada uno con su .css
├── data/         Datos de ejemplo: productos.js (inventario) y empresa.js (valores)
├── pages/        Una página por ruta, cada una con su .css
├── utils/        Funciones puras: formato.js (precios en CLP) e inventario.js (estado de stock)
├── App.jsx       Definición de las rutas
├── main.jsx      Punto de entrada: monta la app dentro de BrowserRouter
└── index.css     Variables CSS globales y estilos base
```



## Decisiones técnicas


| Decisión                     | Detalle                                                                                                                                                                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Estado derivado en el filtro | Solo la categoría elegida se guarda con `useState`; la lista filtrada y el número de productos por reponer se calculan en cada render, sin duplicar estado                                                                                |
| Funciones puras en `utils`   | `formatearPrecio` usa `Intl.NumberFormat('es-CL')` con CLP; `obtenerEstadoStock` recibe un producto y devuelve `{ clave, etiqueta }`. No dependen de React y se reutilizan en Inicio y Detalle                                            |
| `<title>` por página         | React 19 mueve el `<title>` de cada página al `<head>`, sin librerías extra. El detalle usa el nombre del producto                                                                                                                        |
| CSS por componente           | Cada componente y página importa su propio `.css`, con nombres BEM (`bloque__elemento--modificador`, por ejemplo `estado--agotado`)                                                                                                       |
| Variables globales           | Los colores se definen una sola vez en `:root` (`src/index.css`) y todos los archivos usan `var(--color-...)`                                                                                                                             |
| Tabla a tarjetas en móvil    | Bajo 600px cada fila se muestra como tarjeta y cada celda toma su etiqueta de `data-label` con `td::before`; desde 600px es una tabla normal. El encabezado se oculta solo visualmente para que los lectores de pantalla lo sigan leyendo |




## Requisitos

- Node.js 22.22 o superior.



## Cómo ejecutar

```bash
npm install
npm run dev
```

Luego abrir [http://localhost:5173](http://localhost:5173).


| Script            | Qué hace                                                |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con recarga automática |
| `npm run build`   | Genera la versión de producción en `dist/`              |
| `npm run preview` | Sirve localmente la versión generada en `dist/`         |
| `npm run lint`    | Revisa el código con ESLint                             |




## Autor

Alonso Basualdo
// Inventario de ejemplo. Precios en pesos chilenos (enteros, sin decimales).
export const productos = [
  { id: 1, nombre: 'Arroz grado 2 1 kg', categoria: 'Abarrotes', precio: 1690, stock: 40, stockMinimo: 15 },
  { id: 2, nombre: 'Aceite maravilla 1 L', categoria: 'Abarrotes', precio: 2990, stock: 0, stockMinimo: 10 },
  { id: 3, nombre: 'Fideos spaghetti 400 g', categoria: 'Abarrotes', precio: 990, stock: 6, stockMinimo: 12 },
  { id: 4, nombre: 'Leche entera 1 L', categoria: 'Lácteos', precio: 1150, stock: 60, stockMinimo: 20 },
  { id: 5, nombre: 'Yogur batido frutilla 125 g', categoria: 'Lácteos', precio: 390, stock: 8, stockMinimo: 24 },
  { id: 6, nombre: 'Queso gauda laminado 250 g', categoria: 'Lácteos', precio: 3490, stock: 18, stockMinimo: 8 },
  { id: 7, nombre: 'Palta hass 1 kg', categoria: 'Frutas y verduras', precio: 4990, stock: 0, stockMinimo: 10 },
  { id: 8, nombre: 'Tomate 1 kg', categoria: 'Frutas y verduras', precio: 1890, stock: 35, stockMinimo: 12 },
  { id: 9, nombre: 'Manzana royal gala 1 kg', categoria: 'Frutas y verduras', precio: 1590, stock: 4, stockMinimo: 15 },
  { id: 10, nombre: 'Detergente líquido 3 L', categoria: 'Limpieza', precio: 8990, stock: 14, stockMinimo: 6 },
  { id: 11, nombre: 'Cloro gel 900 ml', categoria: 'Limpieza', precio: 1490, stock: 22, stockMinimo: 10 },
  { id: 12, nombre: 'Agua mineral sin gas 1,6 L', categoria: 'Bebidas', precio: 890, stock: 48, stockMinimo: 20 },
]

// El id llega como texto desde la URL, por eso se convierte a número.
export function obtenerProductoPorId(id) {
  return productos.find((producto) => producto.id === Number(id))
}

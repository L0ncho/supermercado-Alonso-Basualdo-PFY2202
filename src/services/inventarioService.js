import { productos } from '../data/productos.js'

// Cambiar a true para probar el mensaje de error
const SIMULAR_ERROR = false

// Simula una consulta al servidor que tarda 600 ms en responder
export function obtenerProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (SIMULAR_ERROR) {
        reject(new Error('No se pudo cargar el inventario.'))
      } else {
        resolve(productos)
      }
    }, 600)
  })
}

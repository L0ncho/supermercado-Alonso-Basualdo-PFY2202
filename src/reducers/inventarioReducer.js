export const ACCIONES = {
  CARGA_INICIADA: 'CARGA_INICIADA',
  CARGA_EXITOSA: 'CARGA_EXITOSA',
  CARGA_FALLIDA: 'CARGA_FALLIDA',
  AGREGAR_PRODUCTO: 'AGREGAR_PRODUCTO',
}

export const estadoInicial = {
  productos: [],
  cargando: true,
  error: null,
}

function siguienteId(productos) {
  if (productos.length === 0) return 1
  return Math.max(...productos.map((producto) => producto.id)) + 1
}

export function inventarioReducer(estado, accion) {
  switch (accion.type) {
    case ACCIONES.CARGA_INICIADA:
      return { ...estado, cargando: true, error: null }
    case ACCIONES.CARGA_EXITOSA:
      return { ...estado, productos: accion.payload, cargando: false, error: null }
    case ACCIONES.CARGA_FALLIDA:
      return { ...estado, cargando: false, error: accion.payload }
    case ACCIONES.AGREGAR_PRODUCTO: {
      const nuevoProducto = { ...accion.payload, id: siguienteId(estado.productos) }
      return { ...estado, productos: [...estado.productos, nuevoProducto] }
    }
    default:
      throw new Error(`Acción desconocida: ${accion.type}`)
  }
}

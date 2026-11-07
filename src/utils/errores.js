const MENSAJE_POR_DEFECTO = 'No se pudo cargar el inventario.'

function esTextoConContenido(valor) {
  return typeof valor === 'string' && valor.trim() !== ''
}

// Convierte cualquier error en un objeto plano { mensaje } apto para guardar en el estado
export function normalizarError(error) {
  if (esTextoConContenido(error)) {
    return { mensaje: error }
  }

  if (esTextoConContenido(error?.message)) {
    return { mensaje: error.message }
  }

  return { mensaje: MENSAJE_POR_DEFECTO }
}

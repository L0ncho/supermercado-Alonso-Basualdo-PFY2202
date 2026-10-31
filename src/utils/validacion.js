function normalizar(texto) {
  return texto.trim().toLowerCase()
}

function esEnteroDesde(valor, minimo) {
  const texto = String(valor).trim()
  if (texto === '') return false
  const numero = Number(texto)
  return Number.isInteger(numero) && numero >= minimo
}

export function validarArticulo(valores, productos) {
  const errores = {}
  const nombre = valores.nombre.trim()
  const marca = valores.marca.trim()

  if (nombre === '') {
    errores.nombre = 'Ingresa el nombre'
  } else if (nombre.length > 60) {
    errores.nombre = 'Máximo 60 caracteres'
  }

  if (marca === '') {
    errores.marca = 'Ingresa la marca'
  } else if (marca.length > 40) {
    errores.marca = 'Máximo 40 caracteres'
  }

  if (valores.categoria === '') {
    errores.categoria = 'Selecciona un tipo de producto'
  }

  if (!esEnteroDesde(valores.precio, 1)) {
    errores.precio = 'Ingresa un precio entero mayor que 0'
  }

  if (!esEnteroDesde(valores.stock, 0)) {
    errores.stock = 'Ingresa un número entero mayor o igual a 0'
  }

  if (!esEnteroDesde(valores.stockMinimo, 0)) {
    errores.stockMinimo = 'Ingresa un número entero mayor o igual a 0'
  }

  if (!errores.nombre && !errores.marca) {
    const duplicado = productos.some(
      (producto) =>
        normalizar(producto.nombre) === normalizar(nombre) &&
        normalizar(producto.marca) === normalizar(marca),
    )
    if (duplicado) {
      errores.nombre = 'Ya existe un artículo con ese nombre y marca'
    }
  }

  return errores
}

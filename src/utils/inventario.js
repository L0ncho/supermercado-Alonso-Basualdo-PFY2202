export function obtenerEstadoStock({stock, stockMinimo}) {
    if (stock === 0) return {clave: 'agotado', etiqueta: 'Agotado'}
    if (stock < stockMinimo) return {clave: 'bajo', etiqueta: 'Stock bajo'}
    return {clave: 'disponible', etiqueta: 'Disponible'}
}

// Cuenta el total de productos y cuántos hay en cada estado de stock
export function resumirInventario(productos) {
    return productos.reduce(
        (resumen, producto) => {
            const {clave} = obtenerEstadoStock(producto)
            resumen.total += 1
            resumen[clave] += 1
            return resumen
        },
        {total: 0, disponible: 0, bajo: 0, agotado: 0},
    )
}

// El id llega como texto desde la URL, por eso se convierte a número.
export function buscarProductoPorId(productos, id) {
    return productos.find((producto) => producto.id === Number(id))
}
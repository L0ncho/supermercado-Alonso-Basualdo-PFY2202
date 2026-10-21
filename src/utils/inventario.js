export function obtenerEstadoStock(stock, stockMinimo) {
    if (stock === 0) return {clave: 'agotado', etiqueta: 'Agotado'}
    if (stock < stockMinimo) return {clave: 'bajo', etiqueta: 'Stock Bajo'}
    return {clave: 'disponible', etiqueta: 'Disponible'}
}
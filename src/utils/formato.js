const formateadorPesos = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
})

export function formatearPrecio(precio) {
    return formateadorPesos.format(precio)
}
const formateadorPesos = new Intl.NumberFormat('es-CL', {
    Style: 'currency',
    currency: 'CLP',
})

export function formatearPeso(precio) {
    return formateadorPesos.format(precio)
}
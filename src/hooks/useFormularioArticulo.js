import { useState } from 'react'
import { validarArticulo } from '../utils/validacion.js'

const valoresIniciales = {
  nombre: '',
  marca: '',
  categoria: '',
  precio: '',
  stock: '',
  stockMinimo: '',
}

// Estado y lógica del formulario de ingreso de artículos
export function useFormularioArticulo(productos, onAgregar) {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState('')

  function manejarCambio(e) {
    const { name, value } = e.target
    setValores({ ...valores, [name]: value })
    setMensaje('')
  }

  function limpiar() {
    setValores(valoresIniciales)
    setErrores({})
    setMensaje('')
  }

  function manejarEnvio(e) {
    e.preventDefault()
    const nuevosErrores = validarArticulo(valores, productos)

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }

    const articulo = {
      nombre: valores.nombre.trim(),
      marca: valores.marca.trim(),
      categoria: valores.categoria,
      precio: Number(valores.precio),
      stock: Number(valores.stock),
      stockMinimo: Number(valores.stockMinimo),
    }

    onAgregar(articulo)
    setValores(valoresIniciales)
    setErrores({})
    setMensaje(`Se agregó «${articulo.nombre}» al inventario.`)
  }

  return { valores, errores, mensaje, manejarCambio, manejarEnvio, limpiar }
}

import { useEffect, useState } from 'react'
import { obtenerProductos } from '../services/inventarioService.js'

export function useProductos() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Evita actualizar el estado si el componente se desmonta antes de la respuesta
    let activo = true

    obtenerProductos()
      .then((datos) => {
        if (activo) setProductos(datos)
      })
      .catch((err) => {
        if (activo) setError(err)
      })
      .finally(() => {
        if (activo) setCargando(false)
      })

    return () => {
      activo = false
    }
  }, [])

  return { productos, cargando, error }
}

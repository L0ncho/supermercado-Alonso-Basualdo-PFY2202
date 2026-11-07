import { useCallback, useEffect, useMemo, useReducer } from 'react'
import { InventarioContext } from './InventarioContext.js'
import { ACCIONES, estadoInicial, inventarioReducer } from '../reducers/inventarioReducer.js'
import { obtenerProductos } from '../services/inventarioService.js'
import { normalizarError } from '../utils/errores.js'

function InventarioProvider({ children }) {
  const [estado, dispatch] = useReducer(inventarioReducer, estadoInicial)

  useEffect(() => {
    // Evita actualizar el estado si el proveedor se desmonta antes de la respuesta
    let activo = true

    dispatch({ type: ACCIONES.CARGA_INICIADA })

    obtenerProductos()
      .then((datos) => {
        if (activo) dispatch({ type: ACCIONES.CARGA_EXITOSA, payload: datos })
      })
      .catch((err) => {
        if (activo) dispatch({ type: ACCIONES.CARGA_FALLIDA, payload: normalizarError(err) })
      })

    return () => {
      activo = false
    }
  }, [])

  const agregarProducto = useCallback((producto) => {
    dispatch({ type: ACCIONES.AGREGAR_PRODUCTO, payload: producto })
  }, [])

  const { productos, cargando, error } = estado

  const value = useMemo(
    () => ({ productos, cargando, error, agregarProducto }),
    [productos, cargando, error, agregarProducto],
  )

  return <InventarioContext value={value}>{children}</InventarioContext>
}

export default InventarioProvider

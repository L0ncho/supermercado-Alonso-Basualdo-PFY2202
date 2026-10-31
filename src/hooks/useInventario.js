import { useContext } from 'react'
import { InventarioContext } from '../context/InventarioContext.js'

export function useInventario() {
  const contexto = useContext(InventarioContext)

  if (contexto === null) {
    throw new Error('useInventario debe usarse dentro de InventarioProvider')
  }

  return contexto
}

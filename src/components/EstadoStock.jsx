import { obtenerEstadoStock } from '../utils/inventario.js'
import './EstadoStock.css'

function EstadoStock({ stock, stockMinimo }) {
  const { clave, etiqueta } = obtenerEstadoStock({ stock, stockMinimo })

  return <span className={`estado-stock estado-stock--${clave}`}>{etiqueta}</span>
}

export default EstadoStock
import { obtenerEstadoStock } from '../utils/inventario.js'

const clasesBase =
  'inline-block rounded-full px-2.5 py-1 text-sm font-bold whitespace-nowrap text-superficie'

const clasesPorEstado = {
  disponible: 'bg-exito',
  bajo: 'bg-alerta',
  agotado: 'bg-peligro',
}

function EstadoStock({ stock, stockMinimo }) {
  const { clave, etiqueta } = obtenerEstadoStock({ stock, stockMinimo })

  return <span className={`${clasesBase} ${clasesPorEstado[clave]}`}>{etiqueta}</span>
}

export default EstadoStock

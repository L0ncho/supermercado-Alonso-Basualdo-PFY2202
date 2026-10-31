import { resumirInventario } from '../../utils/inventario.js'

const clasesItem = 'rounded-xl border border-t-4 border-borde bg-superficie p-3 sm:px-5 sm:py-4'

const clasesBordePorClave = {
  total: 'border-t-primario',
  bajo: 'border-t-alerta',
  agotado: 'border-t-peligro',
}

function ResumenInventario({ productos }) {
  const resumen = resumirInventario(productos)

  const items = [
    { clave: 'total', etiqueta: 'Productos', valor: resumen.total },
    { clave: 'bajo', etiqueta: 'Stock bajo', valor: resumen.bajo },
    { clave: 'agotado', etiqueta: 'Agotados', valor: resumen.agotado },
  ]

  return (
    <dl className="mb-4 grid grid-cols-3 gap-3 sm:gap-4">
      {items.map((item) => (
        <div key={item.clave} className={`${clasesItem} ${clasesBordePorClave[item.clave]}`}>
          <dt className="text-sm font-semibold text-texto-suave">{item.etiqueta}</dt>
          <dd className="mt-1 text-[1.75rem] leading-tight font-bold sm:text-4xl">{item.valor}</dd>
        </div>
      ))}
    </dl>
  )
}

export default ResumenInventario

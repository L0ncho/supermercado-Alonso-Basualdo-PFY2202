import { resumirInventario } from '../../utils/inventario.js'
import './ResumenInventario.css'

function ResumenInventario({ productos }) {
  const resumen = resumirInventario(productos)

  const items = [
    { clave: 'total', etiqueta: 'Productos', valor: resumen.total },
    { clave: 'bajo', etiqueta: 'Stock bajo', valor: resumen.bajo },
    { clave: 'agotado', etiqueta: 'Agotados', valor: resumen.agotado },
  ]

  return (
    <dl className="resumen-inventario">
      {items.map((item) => (
        <div
          key={item.clave}
          className={`resumen-inventario__item resumen-inventario__item--${item.clave}`}
        >
          <dt>{item.etiqueta}</dt>
          <dd>{item.valor}</dd>
        </div>
      ))}
    </dl>
  )
}

export default ResumenInventario

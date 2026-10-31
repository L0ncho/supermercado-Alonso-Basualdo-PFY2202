import FilaProducto from './FilaProducto.jsx'
import {
  clasesCabeceraTabla,
  clasesContenedorTabla,
  clasesCuerpoTabla,
  clasesEncabezado,
  clasesTabla,
} from '../../styles/clases.js'

function TablaProductos({ productos }) {
  if (productos.length === 0) {
    return <p>No hay productos para mostrar.</p>
  }

  return (
    <div className={clasesContenedorTabla}>
      <table className={clasesTabla}>
        <thead className={clasesCabeceraTabla}>
          <tr>
            <th scope="col" className={clasesEncabezado}>Producto</th>
            <th scope="col" className={clasesEncabezado}>Categoría</th>
            <th scope="col" className={clasesEncabezado}>Precio</th>
            <th scope="col" className={clasesEncabezado}>Stock</th>
            <th scope="col" className={clasesEncabezado}>Estado</th>
          </tr>
        </thead>
        <tbody className={clasesCuerpoTabla}>
          {productos.map((producto) => (
            <FilaProducto key={producto.id} producto={producto} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaProductos

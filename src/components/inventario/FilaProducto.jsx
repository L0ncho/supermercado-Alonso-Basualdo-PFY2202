import { Link } from 'react-router'
import EstadoStock from '../EstadoStock.jsx'
import { clasesCelda, clasesFila } from '../../styles/clases.js'
import { formatearPrecio } from '../../utils/formato.js'

function FilaProducto({ producto }) {
  return (
    <tr className={clasesFila}>
      <td data-label="Producto" className={clasesCelda}>
        <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
      </td>
      <td data-label="Categoría" className={clasesCelda}>{producto.categoria}</td>
      <td data-label="Precio" className={clasesCelda}>{formatearPrecio(producto.precio)}</td>
      <td data-label="Stock" className={clasesCelda}>{producto.stock}</td>
      <td data-label="Estado" className={clasesCelda}>
        <EstadoStock stock={producto.stock} stockMinimo={producto.stockMinimo} />
      </td>
    </tr>
  )
}

export default FilaProducto

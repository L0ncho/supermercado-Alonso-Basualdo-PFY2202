import { Link } from 'react-router'
import EstadoStock from '../EstadoStock.jsx'
import { formatearPrecio } from '../../utils/formato.js'

function FilaProducto({ producto }) {
  return (
    <tr>
      <td data-label="Producto">
        <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
      </td>
      <td data-label="Categoría">{producto.categoria}</td>
      <td data-label="Precio">{formatearPrecio(producto.precio)}</td>
      <td data-label="Stock">{producto.stock}</td>
      <td data-label="Estado">
        <EstadoStock stock={producto.stock} stockMinimo={producto.stockMinimo} />
      </td>
    </tr>
  )
}

export default FilaProducto

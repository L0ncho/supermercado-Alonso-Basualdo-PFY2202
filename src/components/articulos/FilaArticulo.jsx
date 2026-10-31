import { Link } from 'react-router'
import { formatearPrecio } from '../../utils/formato.js'

function FilaArticulo({ articulo }) {
  return (
    <tr>
      <td data-label="Nombre">
        <Link to={`/productos/${articulo.id}`}>{articulo.nombre}</Link>
      </td>
      <td data-label="Marca">{articulo.marca}</td>
      <td data-label="Tipo">{articulo.categoria}</td>
      <td data-label="Precio">{formatearPrecio(articulo.precio)}</td>
    </tr>
  )
}

export default FilaArticulo

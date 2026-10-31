import { Link } from 'react-router'
import { clasesCelda, clasesFila } from '../../styles/clases.js'
import { formatearPrecio } from '../../utils/formato.js'

function FilaArticulo({ articulo }) {
  return (
    <tr className={clasesFila}>
      <td data-label="Nombre" className={clasesCelda}>
        <Link to={`/productos/${articulo.id}`}>{articulo.nombre}</Link>
      </td>
      <td data-label="Marca" className={clasesCelda}>{articulo.marca}</td>
      <td data-label="Tipo" className={clasesCelda}>{articulo.categoria}</td>
      <td data-label="Precio" className={clasesCelda}>{formatearPrecio(articulo.precio)}</td>
    </tr>
  )
}

export default FilaArticulo

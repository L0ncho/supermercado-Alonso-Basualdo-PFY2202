import FilaProducto from './FilaProducto.jsx'
import './TablaProductos.css'

function TablaProductos({ productos }) {
  if (productos.length === 0) {
    return <p>No hay productos para mostrar.</p>
  }

  return (
    <div className="tabla-productos__contenedor">
      <table className="tabla-productos">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Categoría</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <FilaProducto key={producto.id} producto={producto} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaProductos

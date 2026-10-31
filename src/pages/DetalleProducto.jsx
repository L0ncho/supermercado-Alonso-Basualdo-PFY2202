import { Link, useParams } from 'react-router'
import EstadoStock from '../components/EstadoStock.jsx'
import TituloPagina from '../components/TituloPagina.jsx'
import { obtenerProductoPorId } from '../data/productos.js'
import { formatearPrecio } from '../utils/formato.js'
import './DetalleProducto.css'

function DetalleProducto() {
  const { id } = useParams()
  const producto = obtenerProductoPorId(id)

  if (!producto) {
    return (
      <section className="detalle">
        <TituloPagina texto="Producto no encontrado" />
        <h1>Producto no encontrado</h1>
        <p>No existe un producto con el código {id}.</p>
        <Link to="/">Volver al inventario</Link>
      </section>
    )
  }

  return (
    <article className="detalle">
      <TituloPagina texto={producto.nombre} />
      <Link to="/" className="detalle__volver">← Volver al inventario</Link>
      <h1>{producto.nombre}</h1>
      <EstadoStock stock={producto.stock} stockMinimo={producto.stockMinimo} />
      <dl className="detalle__datos">
        <dt>Categoría</dt>
        <dd>{producto.categoria}</dd>
        <dt>Precio</dt>
        <dd>{formatearPrecio(producto.precio)}</dd>
        <dt>Stock actual</dt>
        <dd>{producto.stock} unidades</dd>
        <dt>Stock mínimo</dt>
        <dd>{producto.stockMinimo} unidades</dd>
      </dl>
    </article>
  )
}

export default DetalleProducto
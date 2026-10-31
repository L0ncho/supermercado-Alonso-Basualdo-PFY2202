import { Link, useParams } from 'react-router'
import Aviso from '../components/Aviso.jsx'
import EstadoStock from '../components/EstadoStock.jsx'
import TituloPagina from '../components/TituloPagina.jsx'
import { useInventario } from '../hooks/useInventario.js'
import { formatearPrecio } from '../utils/formato.js'
import { buscarProductoPorId } from '../utils/inventario.js'
import './DetalleProducto.css'

function DetalleProducto() {
  const { id } = useParams()
  const { productos, cargando, error } = useInventario()

  if (cargando) {
    return (
      <section className="detalle">
        <TituloPagina texto="Detalle del producto" />
        <h1>Detalle del producto</h1>
        <Aviso>Cargando producto…</Aviso>
      </section>
    )
  }

  if (error) {
    return (
      <section className="detalle">
        <TituloPagina texto="Detalle del producto" />
        <h1>Detalle del producto</h1>
        <Aviso tipo="error">{error.message}</Aviso>
      </section>
    )
  }

  const producto = buscarProductoPorId(productos, id)

  if (!producto) {
    return (
      <section className="detalle">
        <TituloPagina texto="Producto no encontrado" />
        <h1>Producto no encontrado</h1>
        <p>No existe un producto con el código {id}.</p>
        <Link to="/inventario">Volver al inventario</Link>
      </section>
    )
  }

  return (
    <article className="detalle">
      <TituloPagina texto={producto.nombre} />
      <Link to="/inventario" className="detalle__volver">← Volver al inventario</Link>
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

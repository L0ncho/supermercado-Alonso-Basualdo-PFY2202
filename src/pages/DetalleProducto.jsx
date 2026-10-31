import { Link, useParams } from 'react-router'
import Aviso from '../components/Aviso.jsx'
import EstadoStock from '../components/EstadoStock.jsx'
import TituloPagina from '../components/TituloPagina.jsx'
import { useInventario } from '../hooks/useInventario.js'
import { clasesSuperficie } from '../styles/clases.js'
import { formatearPrecio } from '../utils/formato.js'
import { buscarProductoPorId } from '../utils/inventario.js'

const clasesTermino = 'text-sm text-texto-suave'
const clasesDato = 'mb-3 text-lg font-semibold sm:mb-0'

function DetalleProducto() {
  const { id } = useParams()
  const { productos, cargando, error } = useInventario()

  if (cargando) {
    return (
      <section className={clasesSuperficie}>
        <TituloPagina texto="Detalle del producto" />
        <h1>Detalle del producto</h1>
        <Aviso>Cargando producto…</Aviso>
      </section>
    )
  }

  if (error) {
    return (
      <section className={clasesSuperficie}>
        <TituloPagina texto="Detalle del producto" />
        <h1>Detalle del producto</h1>
        <Aviso tipo="error">{error.message}</Aviso>
      </section>
    )
  }

  const producto = buscarProductoPorId(productos, id)

  if (!producto) {
    return (
      <section className={clasesSuperficie}>
        <TituloPagina texto="Producto no encontrado" />
        <h1>Producto no encontrado</h1>
        <p>No existe un producto con el código {id}.</p>
        <Link to="/inventario">Volver al inventario</Link>
      </section>
    )
  }

  return (
    <article className={clasesSuperficie}>
      <TituloPagina texto={producto.nombre} />
      <Link to="/inventario" className="mb-4 inline-block">← Volver al inventario</Link>
      <h1>{producto.nombre}</h1>
      <EstadoStock stock={producto.stock} stockMinimo={producto.stockMinimo} />
      <dl className="mt-6 grid gap-1 sm:grid-cols-[max-content_1fr] sm:gap-x-8 sm:gap-y-3">
        <dt className={clasesTermino}>Categoría</dt>
        <dd className={clasesDato}>{producto.categoria}</dd>
        <dt className={clasesTermino}>Precio</dt>
        <dd className={clasesDato}>{formatearPrecio(producto.precio)}</dd>
        <dt className={clasesTermino}>Stock actual</dt>
        <dd className={clasesDato}>{producto.stock} unidades</dd>
        <dt className={clasesTermino}>Stock mínimo</dt>
        <dd className={clasesDato}>{producto.stockMinimo} unidades</dd>
      </dl>
    </article>
  )
}

export default DetalleProducto

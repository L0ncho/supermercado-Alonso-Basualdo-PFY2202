import { Link } from 'react-router'
import Aviso from '../components/Aviso.jsx'
import TituloPagina from '../components/TituloPagina.jsx'
import ResumenInventario from '../components/inventario/ResumenInventario.jsx'
import { NOMBRE_SUPERMERCADO } from '../config/sitio.js'
import { useProductos } from '../hooks/useProductos.js'
import './Inicio.css'

const accesos = [
  {
    ruta: '/inventario',
    titulo: 'Inventario',
    descripcion: 'Revisa el stock de cada producto y filtra por categoría.',
  },
  {
    ruta: '/quienes-somos',
    titulo: 'Quiénes somos',
    descripcion: 'Conoce nuestra historia, misión, visión y valores.',
  },
  {
    ruta: '/como-comprar',
    titulo: 'Cómo comprar',
    descripcion: 'Pasos para comprar, medios de pago y despacho.',
  },
]

function Inicio() {
  const { productos, cargando, error } = useProductos()

  return (
    <div className="inicio">
      <TituloPagina texto="Inicio" />

      <section className="inicio__bienvenida">
        <h1>Bienvenido a {NOMBRE_SUPERMERCADO}</h1>
        <p>
          Gestiona el inventario de nuestras tiendas: revisa el stock disponible,
          detecta a tiempo los productos por reponer y consulta el detalle de cada uno.
        </p>
        <Link to="/inventario" className="inicio__boton">Ver inventario</Link>
      </section>

      <section className="inicio__seccion" aria-labelledby="inicio-resumen">
        <h2 id="inicio-resumen">Resumen del inventario</h2>
        {cargando ? (
          <Aviso>Cargando resumen…</Aviso>
        ) : error ? (
          <Aviso tipo="error">{error.message}</Aviso>
        ) : (
          <ResumenInventario productos={productos} />
        )}
      </section>

      <section className="inicio__seccion" aria-labelledby="inicio-accesos">
        <h2 id="inicio-accesos">Accesos rápidos</h2>
        <ul className="inicio__accesos">
          {accesos.map((acceso) => (
            <li key={acceso.ruta}>
              <Link to={acceso.ruta} className="inicio__tarjeta">
                <span className="inicio__tarjeta-titulo">{acceso.titulo}</span>
                <span className="inicio__tarjeta-descripcion">{acceso.descripcion}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Inicio

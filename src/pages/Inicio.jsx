import { Link } from 'react-router'
import Aviso from '../components/Aviso.jsx'
import TituloPagina from '../components/TituloPagina.jsx'
import ResumenInventario from '../components/inventario/ResumenInventario.jsx'
import { NOMBRE_SUPERMERCADO } from '../config/sitio.js'
import { useInventario } from '../hooks/useInventario.js'

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

const clasesTarjeta =
  'flex h-full flex-col gap-1.5 rounded-xl border border-borde bg-superficie p-5 text-texto no-underline hover:border-primario'

function Inicio() {
  const { productos, cargando, error } = useInventario()

  return (
    <div>
      <TituloPagina texto="Inicio" />

      <section className="mb-8 rounded-2xl bg-primario px-6 py-8 text-superficie md:px-10 md:py-12">
        <h1 className="text-superficie">Bienvenido a {NOMBRE_SUPERMERCADO}</h1>
        <p className="mb-6 max-w-[60ch]">
          Gestiona el inventario de nuestras tiendas: revisa el stock disponible,
          detecta a tiempo los productos por reponer y consulta el detalle de cada uno.
        </p>
        <Link
          to="/inventario"
          className="inline-block rounded-lg bg-superficie px-5 py-3 text-primario no-underline hover:bg-fondo hover:text-primario-oscuro focus-visible:outline-superficie focus-visible:outline-offset-3"
        >
          Ver inventario
        </Link>
      </section>

      <section aria-labelledby="inicio-resumen">
        <h2 id="inicio-resumen">Resumen del inventario</h2>
        {cargando ? (
          <Aviso>Cargando resumen…</Aviso>
        ) : error ? (
          <Aviso tipo="error">{error.message}</Aviso>
        ) : (
          <ResumenInventario productos={productos} />
        )}
      </section>

      <section className="mt-8" aria-labelledby="inicio-accesos">
        <h2 id="inicio-accesos">Accesos rápidos</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {accesos.map((acceso) => (
            <li key={acceso.ruta}>
              <Link to={acceso.ruta} className={clasesTarjeta}>
                <span className="text-lg font-bold text-primario-oscuro">{acceso.titulo}</span>
                <span className="font-normal text-texto-suave">{acceso.descripcion}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Inicio

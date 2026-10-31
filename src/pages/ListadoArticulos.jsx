import { Link } from 'react-router'
import Aviso from '../components/Aviso.jsx'
import TituloPagina from '../components/TituloPagina.jsx'
import TablaArticulos from '../components/articulos/TablaArticulos.jsx'
import { useInventario } from '../hooks/useInventario.js'

function ListadoArticulos() {
  const { productos, cargando, error } = useInventario()

  const articulosOrdenados = productos.toSorted((a, b) =>
    a.nombre.localeCompare(b.nombre, 'es'),
  )

  const total = articulosOrdenados.length
  const textoTotal =
    total === 1 ? '1 artículo registrado' : `${total} artículos registrados`

  return (
    <section>
      <TituloPagina texto="Listado de artículos" />
      <h1>Listado de artículos</h1>
      {cargando ? (
        <Aviso>Cargando artículos…</Aviso>
      ) : error ? (
        <Aviso tipo="error">{error.message}</Aviso>
      ) : (
        <>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>{textoTotal}</p>
            <Link to="/articulos/nuevo">Ingresar nuevo artículo</Link>
          </div>
          {total === 0 ? (
            <Aviso>No hay artículos registrados.</Aviso>
          ) : (
            <TablaArticulos articulos={articulosOrdenados} />
          )}
        </>
      )}
    </section>
  )
}

export default ListadoArticulos

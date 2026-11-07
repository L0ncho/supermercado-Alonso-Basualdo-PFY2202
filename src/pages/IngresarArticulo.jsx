import Aviso from '../components/Aviso.jsx'
import TituloPagina from '../components/TituloPagina.jsx'
import FormularioArticulo from '../components/articulos/FormularioArticulo.jsx'
import { useInventario } from '../hooks/useInventario.js'
import { clasesSuperficie } from '../styles/clases.js'

function IngresarArticulo() {
  const { productos, cargando, error, agregarProducto } = useInventario()

  const categorias = [...new Set(productos.map((p) => p.categoria))].sort((a, b) =>
    a.localeCompare(b, 'es'),
  )

  return (
    <section>
      <TituloPagina texto="Ingresar artículo" />
      <h1>Ingresar artículo</h1>
      {cargando ? (
        <Aviso>Cargando inventario…</Aviso>
      ) : error ? (
        <Aviso tipo="error">{error.mensaje}</Aviso>
      ) : (
        <div className={clasesSuperficie}>
          <FormularioArticulo
            categorias={categorias}
            productos={productos}
            onAgregar={agregarProducto}
          />
        </div>
      )}
    </section>
  )
}

export default IngresarArticulo

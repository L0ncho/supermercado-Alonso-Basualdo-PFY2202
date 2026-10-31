import { useState } from 'react'
import Aviso from '../components/Aviso.jsx'
import TituloPagina from '../components/TituloPagina.jsx'
import FiltroCategoria from '../components/inventario/FiltroCategoria.jsx'
import ResumenInventario from '../components/inventario/ResumenInventario.jsx'
import TablaProductos from '../components/inventario/TablaProductos.jsx'
import { useProductos } from '../hooks/useProductos.js'

function Inicio() {
  const { productos, cargando, error } = useProductos()
  const [categoria, setCategoria] = useState('Todas')

  const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))]

  const productosFiltrados =
    categoria === 'Todas'
      ? productos
      : productos.filter((p) => p.categoria === categoria)

  return (
    <section className="inicio">
      <TituloPagina texto="Inventario" />
      <h1>Inventario</h1>
      {cargando ? (
        <Aviso>Cargando inventario…</Aviso>
      ) : error ? (
        <Aviso tipo="error">{error.message}</Aviso>
      ) : (
        <>
          <ResumenInventario productos={productos} />
          <FiltroCategoria
            categorias={categorias}
            valor={categoria}
            onCambiar={setCategoria}
          />
          <TablaProductos productos={productosFiltrados} />
        </>
      )}
    </section>
  )
}

export default Inicio

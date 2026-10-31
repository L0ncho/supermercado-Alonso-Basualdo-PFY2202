import { useState } from 'react'
import TituloPagina from '../components/TituloPagina.jsx'
import FiltroCategoria from '../components/inventario/FiltroCategoria.jsx'
import ResumenInventario from '../components/inventario/ResumenInventario.jsx'
import TablaProductos from '../components/inventario/TablaProductos.jsx'
import { productos } from '../data/productos.js'

const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))]

function Inicio() {
  const [categoria, setCategoria] = useState('Todas')

  const productosFiltrados =
    categoria === 'Todas'
      ? productos
      : productos.filter((p) => p.categoria === categoria)

  return (
    <section className="inicio">
      <TituloPagina texto="Inventario" />
      <h1>Inventario</h1>
      <ResumenInventario productos={productos} />
      <FiltroCategoria
        categorias={categorias}
        valor={categoria}
        onCambiar={setCategoria}
      />
      <TablaProductos productos={productosFiltrados} />
    </section>
  )
}

export default Inicio

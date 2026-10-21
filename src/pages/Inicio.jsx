import { useState } from 'react'
import { Link } from 'react-router'
import { productos } from '../data/productos.js'
import { formatearPrecio } from '../utils/formato.js'
import { obtenerEstadoStock } from '../utils/inventario.js'
import './Inicio.css'

const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))]

function Inicio() {
  const [categoria, setCategoria] = useState('Todas')

  const productosFiltrados =
    categoria === 'Todas'
      ? productos
      : productos.filter((p) => p.categoria === categoria)

  const porReponer = productos.filter(
    (p) => obtenerEstadoStock(p).clave !== 'disponible',
  ).length

  return (
    <section className="inicio">
      <title>Inventario | Supermercado El Ahorro</title>
      <h1>Inventario</h1>
      <p className="inicio__resumen">
        {productos.length} productos registrados · {porReponer} requieren reposición
      </p>

      <label className="inicio__filtro">
        Categoría
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          {categorias.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <div className="inicio__tabla-contenedor">
        <table className="inicio__tabla">
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
            {productosFiltrados.map((producto) => {
              const estado = obtenerEstadoStock(producto)
              return (
                <tr key={producto.id}>
                  <td>
                    <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
                  </td>
                  <td>{producto.categoria}</td>
                  <td>{formatearPrecio(producto.precio)}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <span className={`estado estado--${estado.clave}`}>{estado.etiqueta}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Inicio
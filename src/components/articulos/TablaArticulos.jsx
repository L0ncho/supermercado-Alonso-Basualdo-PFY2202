import FilaArticulo from './FilaArticulo.jsx'

function TablaArticulos({ articulos }) {
  return (
    <table>
      <caption>Artículos registrados en el inventario</caption>
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Marca</th>
          <th scope="col">Tipo</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        {articulos.map((articulo) => (
          <FilaArticulo key={articulo.id} articulo={articulo} />
        ))}
      </tbody>
    </table>
  )
}

export default TablaArticulos

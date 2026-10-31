import FilaArticulo from './FilaArticulo.jsx'
import {
  clasesCabeceraTabla,
  clasesContenedorTabla,
  clasesCuerpoTabla,
  clasesEncabezado,
  clasesTabla,
} from '../../styles/clases.js'

function TablaArticulos({ articulos }) {
  return (
    <div className={clasesContenedorTabla}>
      <table className={clasesTabla}>
        <caption className="sr-only">Artículos registrados en el inventario</caption>
        <thead className={clasesCabeceraTabla}>
          <tr>
            <th scope="col" className={clasesEncabezado}>Nombre</th>
            <th scope="col" className={clasesEncabezado}>Marca</th>
            <th scope="col" className={clasesEncabezado}>Tipo</th>
            <th scope="col" className={clasesEncabezado}>Precio</th>
          </tr>
        </thead>
        <tbody className={clasesCuerpoTabla}>
          {articulos.map((articulo) => (
            <FilaArticulo key={articulo.id} articulo={articulo} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaArticulos

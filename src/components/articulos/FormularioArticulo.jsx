import { Link } from 'react-router'
import Aviso from '../Aviso.jsx'
import Boton from '../Boton.jsx'
import CampoFormulario from './CampoFormulario.jsx'
import { useFormularioArticulo } from '../../hooks/useFormularioArticulo.js'

function FormularioArticulo({ categorias, productos, onAgregar }) {
  const { valores, errores, mensaje, manejarCambio, manejarEnvio, limpiar } =
    useFormularioArticulo(productos, onAgregar)

  return (
    <form onSubmit={manejarEnvio} noValidate className="grid max-w-xl gap-4">
      <CampoFormulario
        id="articulo-nombre"
        nombre="nombre"
        etiqueta="Nombre"
        type="text"
        valor={valores.nombre}
        onCambiar={manejarCambio}
        error={errores.nombre}
      />

      <CampoFormulario
        id="articulo-marca"
        nombre="marca"
        etiqueta="Marca"
        type="text"
        valor={valores.marca}
        onCambiar={manejarCambio}
        error={errores.marca}
      />

      <CampoFormulario
        elemento="select"
        id="articulo-categoria"
        nombre="categoria"
        etiqueta="Tipo de producto"
        valor={valores.categoria}
        onCambiar={manejarCambio}
        error={errores.categoria}
      >
        <option value="">Selecciona un tipo</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>{categoria}</option>
        ))}
      </CampoFormulario>

      <div className="grid gap-4 md:grid-cols-3">
        <CampoFormulario
          id="articulo-precio"
          nombre="precio"
          etiqueta="Precio"
          type="text"
          inputMode="numeric"
          valor={valores.precio}
          onCambiar={manejarCambio}
          error={errores.precio}
        />

        <CampoFormulario
          id="articulo-stock"
          nombre="stock"
          etiqueta="Stock"
          type="text"
          inputMode="numeric"
          valor={valores.stock}
          onCambiar={manejarCambio}
          error={errores.stock}
        />

        <CampoFormulario
          id="articulo-stock-minimo"
          nombre="stockMinimo"
          etiqueta="Stock mínimo"
          type="text"
          inputMode="numeric"
          valor={valores.stockMinimo}
          onCambiar={manejarCambio}
          error={errores.stockMinimo}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <Boton type="submit">Agregar artículo</Boton>
        <Boton variante="secundario" onClick={limpiar}>Limpiar</Boton>
      </div>

      {mensaje && (
        <Aviso tipo="exito">
          {mensaje}{' '}
          <Link to="/articulos">Ver listado</Link>
        </Aviso>
      )}
    </form>
  )
}

export default FormularioArticulo

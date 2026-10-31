import { useState } from 'react'
import { Link } from 'react-router'
import Aviso from '../Aviso.jsx'
import { validarArticulo } from '../../utils/validacion.js'

const valoresIniciales = {
  nombre: '',
  marca: '',
  categoria: '',
  precio: '',
  stock: '',
  stockMinimo: '',
}

function FormularioArticulo({ categorias, productos, onAgregar }) {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState('')

  function propsAccesibles(campo) {
    if (!errores[campo]) return {}
    return { 'aria-invalid': 'true', 'aria-describedby': `error-${campo}` }
  }

  function mostrarError(campo) {
    if (!errores[campo]) return null
    return <p id={`error-${campo}`}>{errores[campo]}</p>
  }

  function manejarCambio(e) {
    const { name, value } = e.target
    setValores({ ...valores, [name]: value })
    setMensaje('')
  }

  function limpiar() {
    setValores(valoresIniciales)
    setErrores({})
    setMensaje('')
  }

  function manejarEnvio(e) {
    e.preventDefault()
    const nuevosErrores = validarArticulo(valores, productos)

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }

    const articulo = {
      nombre: valores.nombre.trim(),
      marca: valores.marca.trim(),
      categoria: valores.categoria,
      precio: Number(valores.precio),
      stock: Number(valores.stock),
      stockMinimo: Number(valores.stockMinimo),
    }

    onAgregar(articulo)
    setValores(valoresIniciales)
    setErrores({})
    setMensaje(`Se agregó «${articulo.nombre}» al inventario.`)
  }

  return (
    <form onSubmit={manejarEnvio} noValidate>
      <div>
        <label htmlFor="articulo-nombre">Nombre</label>
        <input
          id="articulo-nombre"
          name="nombre"
          type="text"
          value={valores.nombre}
          onChange={manejarCambio}
          {...propsAccesibles('nombre')}
        />
        {mostrarError('nombre')}
      </div>

      <div>
        <label htmlFor="articulo-marca">Marca</label>
        <input
          id="articulo-marca"
          name="marca"
          type="text"
          value={valores.marca}
          onChange={manejarCambio}
          {...propsAccesibles('marca')}
        />
        {mostrarError('marca')}
      </div>

      <div>
        <label htmlFor="articulo-categoria">Tipo de producto</label>
        <select
          id="articulo-categoria"
          name="categoria"
          value={valores.categoria}
          onChange={manejarCambio}
          {...propsAccesibles('categoria')}
        >
          <option value="">Selecciona un tipo</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </select>
        {mostrarError('categoria')}
      </div>

      <div>
        <label htmlFor="articulo-precio">Precio</label>
        <input
          id="articulo-precio"
          name="precio"
          type="number"
          min="1"
          step="1"
          value={valores.precio}
          onChange={manejarCambio}
          {...propsAccesibles('precio')}
        />
        {mostrarError('precio')}
      </div>

      <div>
        <label htmlFor="articulo-stock">Stock</label>
        <input
          id="articulo-stock"
          name="stock"
          type="number"
          min="0"
          step="1"
          value={valores.stock}
          onChange={manejarCambio}
          {...propsAccesibles('stock')}
        />
        {mostrarError('stock')}
      </div>

      <div>
        <label htmlFor="articulo-stock-minimo">Stock mínimo</label>
        <input
          id="articulo-stock-minimo"
          name="stockMinimo"
          type="number"
          min="0"
          step="1"
          value={valores.stockMinimo}
          onChange={manejarCambio}
          {...propsAccesibles('stockMinimo')}
        />
        {mostrarError('stockMinimo')}
      </div>

      <div>
        <button type="submit">Agregar artículo</button>
        <button type="button" onClick={limpiar}>Limpiar</button>
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

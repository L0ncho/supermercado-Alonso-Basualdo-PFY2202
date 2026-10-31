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

const clasesCampo = 'flex flex-col gap-1.5'
const clasesEtiqueta = 'font-semibold'
const clasesControl =
  'w-full rounded-lg border border-borde bg-superficie px-3 py-2 text-texto aria-[invalid=true]:border-peligro'
const clasesError = 'text-sm text-peligro'
const clasesBotonSecundario =
  'border-primario bg-superficie text-primario hover:bg-fondo hover:text-primario-oscuro'

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
    return <p id={`error-${campo}`} className={clasesError}>{errores[campo]}</p>
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
    <form onSubmit={manejarEnvio} noValidate className="grid max-w-xl gap-4">
      <div className={clasesCampo}>
        <label htmlFor="articulo-nombre" className={clasesEtiqueta}>Nombre</label>
        <input
          id="articulo-nombre"
          name="nombre"
          type="text"
          value={valores.nombre}
          onChange={manejarCambio}
          className={clasesControl}
          {...propsAccesibles('nombre')}
        />
        {mostrarError('nombre')}
      </div>

      <div className={clasesCampo}>
        <label htmlFor="articulo-marca" className={clasesEtiqueta}>Marca</label>
        <input
          id="articulo-marca"
          name="marca"
          type="text"
          value={valores.marca}
          onChange={manejarCambio}
          className={clasesControl}
          {...propsAccesibles('marca')}
        />
        {mostrarError('marca')}
      </div>

      <div className={clasesCampo}>
        <label htmlFor="articulo-categoria" className={clasesEtiqueta}>Tipo de producto</label>
        <select
          id="articulo-categoria"
          name="categoria"
          value={valores.categoria}
          onChange={manejarCambio}
          className={clasesControl}
          {...propsAccesibles('categoria')}
        >
          <option value="">Selecciona un tipo</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </select>
        {mostrarError('categoria')}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className={clasesCampo}>
          <label htmlFor="articulo-precio" className={clasesEtiqueta}>Precio</label>
          <input
            id="articulo-precio"
            name="precio"
            type="number"
            min="1"
            step="1"
            value={valores.precio}
            onChange={manejarCambio}
            className={clasesControl}
            {...propsAccesibles('precio')}
          />
          {mostrarError('precio')}
        </div>

        <div className={clasesCampo}>
          <label htmlFor="articulo-stock" className={clasesEtiqueta}>Stock</label>
          <input
            id="articulo-stock"
            name="stock"
            type="number"
            min="0"
            step="1"
            value={valores.stock}
            onChange={manejarCambio}
            className={clasesControl}
            {...propsAccesibles('stock')}
          />
          {mostrarError('stock')}
        </div>

        <div className={clasesCampo}>
          <label htmlFor="articulo-stock-minimo" className={clasesEtiqueta}>Stock mínimo</label>
          <input
            id="articulo-stock-minimo"
            name="stockMinimo"
            type="number"
            min="0"
            step="1"
            value={valores.stockMinimo}
            onChange={manejarCambio}
            className={clasesControl}
            {...propsAccesibles('stockMinimo')}
          />
          {mostrarError('stockMinimo')}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="submit">Agregar artículo</button>
        <button type="button" onClick={limpiar} className={clasesBotonSecundario}>
          Limpiar
        </button>
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

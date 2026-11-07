import { clasesControl } from '../../styles/clases.js'

function FiltroCategoria({ categorias, valor, onCambiar }) {
  return (
    <label className="mb-4 flex flex-col gap-1.5 font-semibold sm:flex-row sm:items-center sm:gap-3">
      Categoría
      <select
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
        className={`${clasesControl} sm:w-auto`}
      >
        {categorias.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </label>
  )
}

export default FiltroCategoria

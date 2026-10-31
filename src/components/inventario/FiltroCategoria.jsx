import './FiltroCategoria.css'

function FiltroCategoria({ categorias, valor, onCambiar }) {
  return (
    <label className="filtro-categoria">
      Categoría
      <select value={valor} onChange={(e) => onCambiar(e.target.value)}>
        {categorias.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </label>
  )
}

export default FiltroCategoria

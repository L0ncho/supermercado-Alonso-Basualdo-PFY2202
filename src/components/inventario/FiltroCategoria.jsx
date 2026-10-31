function FiltroCategoria({ categorias, valor, onCambiar }) {
  return (
    <label className="mb-4 flex flex-col gap-1.5 font-semibold sm:flex-row sm:items-center sm:gap-3">
      Categoría
      <select
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
        className="rounded-lg border border-borde bg-superficie px-3 py-2 text-texto"
      >
        {categorias.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </label>
  )
}

export default FiltroCategoria

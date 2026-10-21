import { Link, useNavigate } from 'react-router'

function NoEncontrado() {
  const navigate = useNavigate()

  return (
    <section className="no-encontrado">
      <title>Página no encontrada | Supermercado El Ahorro</title>
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe o fue movida.</p>
      <div className="no-encontrado__acciones">
        <button type="button" onClick={() => navigate(-1)}>Volver atrás</button>
        <Link to="/">Ir al inventario</Link>
      </div>
    </section>
  )
}

export default NoEncontrado
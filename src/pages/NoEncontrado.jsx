import { Link, useNavigate } from 'react-router'
import Boton from '../components/Boton.jsx'
import TituloPagina from '../components/TituloPagina.jsx'

function NoEncontrado() {
  const navigate = useNavigate()

  return (
    <section className="py-8 text-center">
      <TituloPagina texto="Página no encontrada" />
      <h1>Página no encontrada</h1>
      <p className="text-texto-suave">La dirección que buscas no existe o fue movida.</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Boton onClick={() => navigate(-1)}>Volver atrás</Boton>
        <Link to="/">Ir al inicio</Link>
      </div>
    </section>
  )
}

export default NoEncontrado

import TituloPagina from '../components/TituloPagina.jsx'
import { empresa, valores } from '../data/empresa.js'
import './QuienesSomos.css'

function QuienesSomos() {
  return (
    <>
      <TituloPagina texto="Quiénes somos" />
      <h1>Quiénes somos</h1>

      <section className="quienes-somos__seccion">
        <h2>Nuestra historia</h2>
        <p>{empresa.historia}</p>
      </section>

      <section className="quienes-somos__seccion">
        <h2>Misión</h2>
        <p>{empresa.mision}</p>
      </section>

      <section className="quienes-somos__seccion">
        <h2>Visión</h2>
        <p>{empresa.vision}</p>
      </section>

      <section className="quienes-somos__valores">
        <h2>Valores</h2>
        {valores.map((valor) => (
          <article key={valor.id} className="quienes-somos__tarjeta">
            <h3>{valor.titulo}</h3>
            <p>{valor.descripcion}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default QuienesSomos

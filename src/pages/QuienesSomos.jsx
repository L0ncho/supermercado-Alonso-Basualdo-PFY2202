import TituloPagina from '../components/TituloPagina.jsx'
import { empresa, valores } from '../data/empresa.js'
import { clasesTarjeta } from '../styles/clases.js'

const clasesSeccion = `${clasesTarjeta} mb-6`

function QuienesSomos() {
  return (
    <>
      <TituloPagina texto="Quiénes somos" />
      <h1>Quiénes somos</h1>

      <section className={clasesSeccion}>
        <h2>Nuestra historia</h2>
        <p className="max-w-[65ch]">{empresa.historia}</p>
      </section>

      <section className={clasesSeccion}>
        <h2>Misión</h2>
        <p className="max-w-[65ch]">{empresa.mision}</p>
      </section>

      <section className={clasesSeccion}>
        <h2>Visión</h2>
        <p className="max-w-[65ch]">{empresa.vision}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <h2 className="col-span-full mb-0">Valores</h2>
        {valores.map((valor) => (
          <article key={valor.id} className={clasesTarjeta}>
            <h3 className="mb-2 font-bold text-primario-oscuro">{valor.titulo}</h3>
            <p className="text-texto-suave">{valor.descripcion}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default QuienesSomos

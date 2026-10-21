import { valores } from '../data/empresa.js'

function QuienesSomos() {
  return (
    <>
      <title>Quiénes somos | Supermercado El Ahorro</title>
      <h1>Quiénes somos</h1>

      <section>
        <h2>Nuestra historia</h2>
        <p>
          Supermercado El Ahorro nació en 1998 como un pequeño almacén de barrio
          atendido por una familia. Con los años sumamos productos, proveedores y
          personas al equipo, hasta convertirnos en un supermercado de confianza
          para la comunidad, sin perder la atención cercana con que partimos.
        </p>
      </section>

      <section>
        <h2>Misión</h2>
        <p>
          Ofrecer productos de calidad a precios justos, con un inventario bien
          gestionado que asegure que encuentres lo que necesitas cuando lo necesitas.
        </p>
      </section>

      <section>
        <h2>Visión</h2>
        <p>
          Ser el supermercado preferido del barrio, reconocido por su buen servicio,
          sus precios convenientes y su compromiso con la comunidad.
        </p>
      </section>

      <section>
        <h2>Valores</h2>
        {valores.map((valor) => (
          <article key={valor.id}>
            <h3>{valor.titulo}</h3>
            <p>{valor.descripcion}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default QuienesSomos

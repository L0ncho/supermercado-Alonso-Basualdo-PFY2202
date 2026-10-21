import { Link } from 'react-router'
import './ComoComprar.css'

function ComoComprar() {
  return (
    <>
      <title>Cómo comprar | Supermercado El Ahorro</title>
      <h1>Cómo comprar</h1>

      <section className="como-comprar__seccion">
        <h2>Pasos para comprar</h2>
        <ol>
          <li>Revisa el inventario y confirma que el producto tenga stock disponible.</li>
          <li>Anota los productos y las cantidades que necesitas.</li>
          <li>Visítanos en el local o llámanos para hacer tu pedido.</li>
          <li>Paga con el medio de pago que prefieras.</li>
          <li>Retira tu compra en el local o recíbela en tu domicilio.</li>
        </ol>
      </section>

      <section className="como-comprar__seccion">
        <h2>Medios de pago</h2>
        <ul>
          <li>Efectivo</li>
          <li>Tarjetas de débito y crédito</li>
          <li>Transferencia bancaria</li>
        </ul>
      </section>

      <section className="como-comprar__seccion">
        <h2>Despacho</h2>
        <p>
          Hacemos despacho a domicilio dentro de la comuna de lunes a sábado.
          Las compras sobre $30.000 tienen despacho gratis; bajo ese monto, el
          despacho cuesta $2.990. Los pedidos hechos antes de las 14:00 se
          entregan el mismo día.
        </p>
      </section>

      <Link to="/" className="como-comprar__volver">Ver el inventario</Link>
    </>
  )
}

export default ComoComprar

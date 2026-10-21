import { NavLink } from 'react-router'
import './MenuInferior.css'

const enlaces = [
  { ruta: '/', texto: 'Inventario' },
  { ruta: '/quienes-somos', texto: 'Quiénes somos' },
  { ruta: '/como-comprar', texto: 'Cómo comprar' },
]

function MenuInferior() {
  return (
    <nav className="menu-inferior" aria-label="Navegación principal">
      <ul className="menu-inferior__lista">
        {enlaces.map((enlace) => (
          <li key={enlace.ruta}>
            <NavLink
              to={enlace.ruta}
              end={enlace.ruta === '/'}
              className="menu-inferior__enlace"
            >
              {enlace.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuInferior
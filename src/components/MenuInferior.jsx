import { NavLink } from 'react-router'

const enlaces = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/inventario', texto: 'Inventario' },
  { ruta: '/quienes-somos', texto: 'Quiénes somos' },
  { ruta: '/como-comprar', texto: 'Cómo comprar' },
]

const clasesEnlace =
  'block h-full border-t-3 border-transparent px-1 py-3 text-center text-[0.8rem] leading-tight font-semibold text-texto-suave no-underline hover:text-primario focus-visible:outline-2 focus-visible:-outline-offset-2 aria-[current=page]:border-primario aria-[current=page]:text-primario sm:px-4 sm:py-3.5 sm:text-base'

function MenuInferior() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 border-t border-borde bg-superficie shadow-[0_-2px_8px_rgb(0_0_0/0.06)]"
      aria-label="Navegación principal"
    >
      <ul className="mx-auto flex max-w-240 justify-around">
        {enlaces.map((enlace) => (
          <li key={enlace.ruta} className="min-w-0 flex-1">
            <NavLink
              to={enlace.ruta}
              end={enlace.ruta === '/'}
              className={clasesEnlace}
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

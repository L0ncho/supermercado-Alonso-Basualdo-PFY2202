import { NavLink } from 'react-router'

const enlaces = [
  { ruta: '/articulos/nuevo', texto: 'Ingresar artículo', end: false },
  { ruta: '/articulos', texto: 'Listado de artículos', end: true },
]

const clasesEnlace =
  'block rounded-md px-3 py-1.5 text-superficie no-underline hover:underline focus-visible:outline-superficie aria-[current=page]:bg-primario-oscuro'

function MenuGestion() {
  return (
    <nav aria-label="Menú de gestión">
      <ul className="flex flex-wrap gap-2">
        {enlaces.map((enlace) => (
          <li key={enlace.ruta}>
            <NavLink to={enlace.ruta} end={enlace.end} className={clasesEnlace}>
              {enlace.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuGestion

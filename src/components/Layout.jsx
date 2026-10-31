import { Link, Outlet } from 'react-router'
import MenuGestion from './MenuGestion.jsx'
import MenuInferior from './MenuInferior.jsx'
import { NOMBRE_SUPERMERCADO } from '../config/sitio.js'

function Layout() {
  return (
    <div className="min-h-screen pb-20">
      <header className="bg-primario p-4">
        <div className="mx-auto flex max-w-240 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="text-xl font-extrabold text-superficie no-underline hover:underline focus-visible:outline-superficie"
          >
            {NOMBRE_SUPERMERCADO}
          </Link>
          <MenuGestion />
        </div>
      </header>
      <main className="mx-auto max-w-240 px-4 py-6">
        <Outlet />
      </main>
      <MenuInferior />
    </div>
  )
}

export default Layout

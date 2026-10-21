import { Link, Outlet } from 'react-router'

function Layout() {
  return (
    <div className="layout">
      <header className="layout__encabezado">
        <Link to="/" className="layout__marca">Supermercado El Ahorro</Link>
      </header>
      <main className="layout__contenido">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
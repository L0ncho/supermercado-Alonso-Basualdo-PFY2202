import { Link, Outlet } from 'react-router'
import MenuInferior from './MenuInferior.jsx'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <header className="layout__encabezado">
        <Link to="/" className="layout__marca">Supermercado El Ahorro</Link>
      </header>
      <main className="layout__contenido">
        <Outlet />
      </main>
      <MenuInferior />
    </div>
  )
}

export default Layout
import { Link, Outlet } from 'react-router'
import MenuInferior from './MenuInferior.jsx'
import { NOMBRE_SUPERMERCADO } from '../config/sitio.js'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <header className="layout__encabezado">
        <Link to="/" className="layout__marca">{NOMBRE_SUPERMERCADO}</Link>
      </header>
      <main className="layout__contenido">
        <Outlet />
      </main>
      <MenuInferior />
    </div>
  )
}

export default Layout
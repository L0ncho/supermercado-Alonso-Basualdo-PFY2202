import { lazy } from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../components/Layout.jsx'

// Cada página se descarga recién cuando se visita su ruta
const Inicio = lazy(() => import('../pages/Inicio.jsx'))
const Inventario = lazy(() => import('../pages/Inventario.jsx'))
const QuienesSomos = lazy(() => import('../pages/QuienesSomos.jsx'))
const ComoComprar = lazy(() => import('../pages/ComoComprar.jsx'))
const ListadoArticulos = lazy(() => import('../pages/ListadoArticulos.jsx'))
const IngresarArticulo = lazy(() => import('../pages/IngresarArticulo.jsx'))
const DetalleProducto = lazy(() => import('../pages/DetalleProducto.jsx'))
const NoEncontrado = lazy(() => import('../pages/NoEncontrado.jsx'))

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="inventario" element={<Inventario />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="como-comprar" element={<ComoComprar />} />
        <Route path="articulos">
          <Route index element={<ListadoArticulos />} />
          <Route path="nuevo" element={<IngresarArticulo />} />
          <Route path=":id" element={<DetalleProducto />} />
        </Route>
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes

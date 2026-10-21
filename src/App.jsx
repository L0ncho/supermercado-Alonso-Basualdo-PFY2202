import {Routes, Route} from 'react-router'
import Layout from './components/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import ComoComprar from './pages/ComoComprar.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="productos/:id" element={<DetalleProducto />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="como-comprar" element={<ComoComprar />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}

export default App
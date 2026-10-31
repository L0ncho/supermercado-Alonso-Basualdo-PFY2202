import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router'

function VolverArriba() {
  const { pathname } = useLocation()
  const tipoNavegacion = useNavigationType()

  useEffect(() => {
    if (tipoNavegacion !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [pathname, tipoNavegacion])

  return null
}

export default VolverArriba

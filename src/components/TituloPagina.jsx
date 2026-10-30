import { NOMBRE_SUPERMERCADO } from '../config/sitio.js'

function TituloPagina({ texto }) {
  return <title>{`${texto} | ${NOMBRE_SUPERMERCADO}`}</title>
}

export default TituloPagina

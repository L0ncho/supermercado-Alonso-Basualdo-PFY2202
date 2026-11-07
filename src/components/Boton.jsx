const clasesBase =
  'cursor-pointer rounded-lg border px-4.5 py-2.5 font-semibold disabled:cursor-not-allowed disabled:opacity-60'

const clasesVariante = {
  primario:
    'border-primario bg-primario text-superficie enabled:hover:border-primario-oscuro enabled:hover:bg-primario-oscuro',
  secundario:
    'border-primario bg-superficie text-primario enabled:hover:bg-fondo enabled:hover:text-primario-oscuro',
}

// className solo agrega ajustes de layout (ancho, márgenes) al final de las clases propias
function Boton({ variante = 'primario', type = 'button', className = '', ...props }) {
  const clases = [clasesBase, clasesVariante[variante], className].filter(Boolean).join(' ')

  return <button {...props} type={type} className={clases} />
}

export default Boton

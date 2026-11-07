import { clasesCampo, clasesControl, clasesEtiqueta, clasesError } from '../../styles/clases.js'

// Campo con etiqueta, control (input o select) y mensaje de error accesible
function CampoFormulario({
  id,
  nombre,
  etiqueta,
  valor,
  onCambiar,
  error,
  elemento = 'input',
  children,
  ...resto
}) {
  const Control = elemento
  const idError = `error-${nombre}`
  const propsAccesibles = error ? { 'aria-invalid': 'true', 'aria-describedby': idError } : {}

  return (
    <div className={clasesCampo}>
      <label htmlFor={id} className={clasesEtiqueta}>{etiqueta}</label>
      <Control
        {...resto}
        id={id}
        name={nombre}
        value={valor}
        onChange={onCambiar}
        className={clasesControl}
        {...propsAccesibles}
      >
        {children}
      </Control>
      {error && <p id={idError} className={clasesError}>{error}</p>}
    </div>
  )
}

export default CampoFormulario

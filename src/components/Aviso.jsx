import './Aviso.css'

function Aviso({ tipo = 'info', children }) {
  return (
    <p className={`aviso aviso--${tipo}`} role={tipo === 'error' ? 'alert' : 'status'}>
      {children}
    </p>
  )
}

export default Aviso

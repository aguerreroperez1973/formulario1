import React from 'react'

const Alert = ({tipoAlerta, mensajeAlerta}) => {

  return (
    <>
       <div className={tipoAlerta}> {mensajeAlerta} </div>
    </>
  )
}

export default Alert

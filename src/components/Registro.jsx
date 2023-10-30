import React from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'

const Registro = () => {
  return (
   <>
     <div><SocialButton 
        icon1="fa-brands fa-github fa-2xl"
        icon2="fa-brands fa-facebook fa-2xl"
        icon3="fa-brands fa-linkedin-in fa-2xl"
     /></div>
     <div><Formulario /></div>
   </>
  )
}

export default Registro
import React from 'react'

const SocialButton = ({icon1, icon2, icon3}) => {
  return (
    <>
        <div className="container d-flex justify-content-around">
                <div><i className={icon1}></i></div>
                <div><i className={icon2}></i></div>
                <div><i className={icon3}></i></div>
        </div>
        <br />
        <div><p>O usa tu email para registrarte</p></div>
    </>
  )
}

export default SocialButton
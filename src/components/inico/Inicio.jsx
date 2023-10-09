import React from 'react'
import photo from './inicio-img/fotoperfil.png'
import './Inicio.css'

function Inicio() {
    return (
        <>
            <div className='container-data'>
                <img className='photo' src={photo} alt="" />
                <div className='data'>
                    <h2>Luciano Bordon</h2>
                    <h2>Desarrollador Web</h2>
                    <h2>Full Stack Trainee</h2>
                </div>
                <div className='social-item'>
                <i id='social-network' className="fa-brands fa-linkedin"></i>
                <i id='social-network' className="fa-brands fa-github"></i>
                <i id='social-network' className="fa-brands fa-instagram"></i>

                </div>
            </div>
        </>
    )
}
export default Inicio
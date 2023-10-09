import React from 'react'
import './Sobremi.css'

function SobreMi() {
  return (
    <>
      <section className='about-me'>
        <div className='presentation'>
          <div className='Title-about'>
            <h2>Sobre mí</h2>
          </div>
          <div className='paragraph'>
            <p>¡Hola! Soy Luciano, un apasionado desarrollador web full stack con un amor profundo por el mundo del desarrollo y la tecnología.</p>
            <p>Mi experiencia en el desarrollo web abarca tanto el front-end como el back-end, lo que me permite crear soluciones completas y cohesivas.</p>
            <p>Me emociona la posibilidad de trabajar en proyectos desafiantes que me permitan explorar nuevas tecnologías y abordar problemas creativos.</p>
            <p>Además, mi pasión por el trabajo en equipo me motiva a colaborar estrechamente con otros profesionales para lograr resultados excepcionales.</p>
          </div>
        </div>
        <div>
          <div className='interests'>
            <h2>Mis intereses</h2>
            <div className='item-interests'>
              <div className='item'>
                <p>Autos</p>
                <i className="fa-solid fa-car"></i>
              </div>
              <div className='item'>
                <p>Viajar</p>
                <i className="fa-solid fa-plane"></i>
              </div>
              <div className='item'>
                <p>Juegos</p>
                <i className="fa-solid fa-gamepad"></i>
              </div>
              <div className='item'>
                <p>Música</p>
                <i className="fa-solid fa-headphones"></i>
              </div>
              <div className='item'>
                <p>Software</p>
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className='item'>
                <p>Hardware</p>
                <i className="fa-solid fa-microchip"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default SobreMi
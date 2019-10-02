import React from 'react';
import Curso from './Curso'
import './styles/styles.scss';

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://wallpaperplay.com/walls/full/3/f/3/156611.jpg" alt="imagen"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos de EDteam</p>
          <p>Tu futuro te esta esperando</p>
          <a href="www.google" className="button">Suscribirse</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3 ">
    <Curso 
      title="React desde cero" 
      image="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png"
      price= {20}
      profesor="Alexys Lozada"
    />
      
    <Curso 
    />
  </div>
  
</>
)

export default App;
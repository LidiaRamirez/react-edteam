import React from 'react';
import Curso from './Curso'
import './styles/styles.scss';

const cursos = [
  {
    indice: 'c1',
    title: "React desde cero",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    price: 20,
    teacher: "Alexys Lozada"
  }, 
  {
    indice: 'c2',
    title: "Angular Desde Cero",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular.png",
    price: 20,
    teacher: "Luis Aviles"
  }, 
  {
    indice: 'c3',
    title: "Firebase",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-web.png",
    price: 20,
    teacher: "Juan Guillermo Gomez"
  }, 
  {
    indice: 'c4',
    title: "Adobe Xd desde cero",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-09/adobe-xd.png",
    price: 20,
    teacher: "Alvaro Felipe"
  }
]

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
    {/* <Curso 
      title="React desde cero" 
      image="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png"
      price= {20}
      profesor="Alexys Lozada"
    /> 
    <Curso/>
    */}

    {
      cursos.map( (curso, index) =>        
        <Curso key={index}
          title= {curso.title}
          image = {curso.image}
          price = {curso.price}
          profesor = {curso.teacher}
        />)
    }
    
  </div>
  
</>
)

export default App;
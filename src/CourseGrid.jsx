import React from 'react';
import Curso from './Curso'

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

const CourseGrid = () =>  (
  <div className="ed-grid m-grid-4">
    {cursos.map(c => 
      <Curso 
        key={c.indice } 
        id = {c.indice}
        title = {c.title}
        image = {c.image}
        price = {c.price}
        profesor = {c.teacher}
      />)}
  </div>
)

export default CourseGrid
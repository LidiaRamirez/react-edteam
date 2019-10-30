import React from 'react'

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

const Course = ({ match }) => {
  
  const cursoActual = cursos.filter(c => c.indice === match.params.id)[0]
  return (
    <div className="ed-grid m-grid-3">
      {
        cursoActual ? (
          <>
            <h1 className="m-cols-3"> { cursoActual.title } </h1>
            <img className="m-cols-1" src= {cursoActual.image} alt={ cursoActual.title }/>
            <p className="m-cols-2">Profesor: {cursoActual.teacher}</p>
          </>
        ) 
        :
        <h1>El curso no existe</h1>
      }
      
    </div>
  )
}

export default Course
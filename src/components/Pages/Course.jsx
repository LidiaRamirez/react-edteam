import React, { useState } from 'react'

const Course = ({ match }) => {
  const [state, setState] = useState({
      id: "c1",
      title: "React desde cero",
      image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
      price: 20,
      teacher: "Alexys Lozada"
  })

  const changeTitle = (text) => {
    setState({
      ...state,
      title: text
    })
  }
  
  return (
    <div className="ed-grid m-grid-3">
      {
        state 
        ? (
            <>
              <h1 className="m-cols-3"> { state.title } </h1>
              <img className="m-cols-1" src= { state.image } alt={ state.title }/>
              <p className="m-cols-2">Profesor: { state.teacer }</p>
              <button onClick = { changeTitle.bind(this, 'Otro titulo') }>Cambiar título</button>
            </>
          ) 
        : <h1>El curso no existe</h1>
      }
      
    </div>
  )
}

export default Course
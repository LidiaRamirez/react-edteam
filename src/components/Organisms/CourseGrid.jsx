import React, { Component } from 'react'
import CourseCard from '../Molecules/CourseCard'
import axios from 'axios'

/* const courses = [
  {
    id: 'c1',
    title: "React desde cero",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    price: 20,
    teacher: "Alexys Lozada"
  }, 
  {
    id: 'c2',
    title: "Angular Desde Cero",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular.png",
    price: 20,
    teacher: "Luis Aviles"
  }, 
  {
    id: 'c3',
    title: "Firebase",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-web.png",
    price: 20,
    teacher: "Juan Guillermo Gomez"
  }, 
  {
    id: 'c4',
    title: "Adobe Xd desde cero",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-09/adobe-xd.png",
    price: 20,
    teacher: "Alvaro Felipe"
  }
] */

class CourseGrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      responseCourses: [],
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/LidiaRamirez/json-cursos/cursos')
    .then(response => {
      this.setState({ responseCourses: response.data })
    })
  }

  render() {
    const { responseCourses } = this.state
    return (
      <div className="ed-grid m-grid-4">
        {responseCourses.map(c => 
          <CourseCard 
            key={c.id } 
            id = {c.id}
            title = {c.title}
            image = {c.image}
            price = {c.price}
            professor = {c.teacher}
          />)}
      </div>
    )
  }
} 

export default CourseGrid
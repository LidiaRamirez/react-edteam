import React from 'react';
import './styles/styles.scss';
import Banner from "./Banner";
import Formulario from "./Formulario";
import CourseGrid from "./CourseGrid"

const App = () => (
  <Router>  
    <Formulario name="EDteam" />
    <CourseGrid />
    <Route path="/" exact component={Banner} />
    <Route path="/cursos" exact component={CourseGrid} />
    {/* <Route path="/formulario" exact component={Formulario} />  */}
  </Router>
)

export default App;
import React from 'react';
import './styles/styles.scss';
import Banner from "./Banner";
import Formulario from "./Formulario";
import CourseGrid from "./CourseGrid";
import Course from './Course';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import MainMenu from './MainMenu';
import Historial from './Historial';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Banner } />
      <Route path="/cursos/:id" exact component={ Course } />
      <Route path="/cursos" exact component={ CourseGrid } />
      <Route path="/historial/:valor" component = { Historial } />
      <Route path="/historial" component = { Historial } />
      <Route path="/formulario" exact component={ () => <Formulario name="pruebaaaaaaa"/> } />
      <Route component={ () => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      ) } />
    </Switch>    
  </Router>
)

export default App;
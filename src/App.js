import React from 'react';
import './styles/styles.scss';
import Banner from "./Banner";
import Formulario from "./Formulario";
import CourseGrid from "./CourseGrid"

const App = () => (
  <>
    <Banner />  
    {/* <Formulario name="EDteam" /> */}
    <CourseGrid />
  </>
)

export default App;
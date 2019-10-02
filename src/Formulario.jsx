import React, {Component} from 'react';

class Formulario extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nombre : '',
      correo: ''
    }
  }

  render() {
    return ( 
      <div className="ed-grid">
        <h1>Formulario</h1>
        <form>
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label>Nombre completo</label>
              <input 
                type="text" 
                onChange={ e => { this.setState({nombre: e.target.value })}}/>
            </div>
            <div className="form__item">
              <label>Correo electrónico</label>
              <input 
                type="email"
                onChange = { e => { this.setState({ correo: e.target.value })}} />
            </div>          
          </div>
          {/* <div className="form__item">
            <input className="button full small" type="submit" value="Enviar"/>
          </div> */}
        </form>
        <div>
          <h2>{`Hola ${this.state.nombre}`}</h2>
          <p>{`Tu correo es: ${this.state.correo}`}</p>
        </div>
      </div>
    )
  }
}

export default Formulario
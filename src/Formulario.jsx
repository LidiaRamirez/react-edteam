import React, {Component} from 'react';

class Formulario extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nombre : '',
      correo: ''
    }

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }

  changeName(e) {
    this.setState({
      nombre: e.target.value
    })
  }

  changeEmail(e) {
    this.setState({
      correo: e.target.value
    })
  }

  render() {
    return ( 
      <div className="ed-grid">
        <h1>Formulario</h1>
        <form>
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label>Nombre completo</label>
              {/* <input 
                type="text" 
                onChange={ e => { this.setState({nombre: e.target.value })}}
              /> */}
              <input 
                type="text" 
                onChange={ this.changeName}
              />
            </div>
            <div className="form__item">
              <label>Correo electrónico</label>
              {/* <input 
                type="email"
                onChange = { e => { this.setState({ correo: e.target.value })}} 
              /> */}
              <input 
                type="email"
                onChange = {this.changeEmail} 
              />
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
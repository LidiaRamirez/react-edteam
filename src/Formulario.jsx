import React, {Component} from 'react';

class Formulario extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nombre : '',
      correo: '',
      hora: `${new Date().getHours()}: ${new Date().getMinutes()}: ${new Date().getSeconds()}`,
    }

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeHours = this.changeHours.bind(this);
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

  changeHours() {
    this.setState({
      hora : `${new Date().getHours()}: ${new Date().getMinutes()}: ${new Date().getSeconds()}`
    })
  }

  render() {
    return ( 
      <div className="ed-grid">
        <h1>Formulario {this.props.name} </h1>
        <p>{this.state.hora}</p>
        <form id="form">
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

  componentDidMount() {
    let form = document.getElementById('form');
    //console.log(form);

    this.intervalHours = setInterval(() => {
      this.changeHours()
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    /* console.log(prevProps);
    console.log(prevState) */
  }

  componentWillUnmount() {
    //clearInterval(this.intervalDate)
  }
}

export default Formulario
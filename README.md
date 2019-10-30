# REACT 

## Componente con funciones
Si son presentacionales, no necesitan trabajar con el estado ciclo de vida. Y solo necesita props.

## Constructor
- Iniciar el estado del componente
- Enlazar eventos
- Setear variables globales

## ComponentWillMount
- Modificar el estado
- No debe realizar llamados a APIS
- No realizar suscripción a eventos

Hasta acá no se muestra componente

## Render (UI Component)
- Debe ser una función pura
- No debe modificar el estado

## ComponentDidMount
- Se puede llamar API's
- Realizar suscripciones a eventos
- Modificar estado

## ComponentWillReceiveProps (nextProps)
- Realizar cambios en los estados basado en las nuevas props

## ComponentWillUnmount
- Dejar de escuchar eventos
- Desuscribirse de un websockets
- Cancelar peticiones HTTP

Realiza limpieza antes de que se desmote

## React Router

### Menú con `NavLink`

NavLink tiene la opción de la clase activo en la URL

<!-- ### `npm run build`

Builds the app for production to the `build` folder.<br>

The build is minified and the filenames include the hashes.<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!** -->

import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title}/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {title}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg" alt=""/>
            </div>
          </div>
          <span className="small">{profesor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="google-com">{ `$ ${price} USD` }</a>
      </div>
    </div>
  </article>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontro título",
  image: "https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/500-internal-server-error-featured-image-1.png",
  price: 0,
  profesor: ""
}

export default Curso
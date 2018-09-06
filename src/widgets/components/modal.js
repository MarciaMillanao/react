import React from 'react';
import './modal.css';

// crearemos un boton para cerrar nuestro modal, lo haremos dentro de nuestro div para que este condicionado siempre que aparezca cuando este visible nuestro div modal
// A el boton le daremos una evento para cerrarlo que luego en nuestra archivo container.js en nuestro contenedor le daremos esta propiedad
function Modal(props) {
  return (
    <div className="Modal">
      Esto es un saludo
      {props.children}
      <button onClick={props.handleClick}> Cerrar </button>
    </div>
  )
}

export default Modal;
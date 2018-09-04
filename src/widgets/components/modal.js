import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      Esto es un saludo
      {props.children}
    </div>
  )
}

export default Modal;
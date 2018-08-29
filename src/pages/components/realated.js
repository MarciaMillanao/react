import React from 'react';
// está es otro opción de importar imagenes en este caso importaremos el logo
import logo from '../../../image/logo.png';
import './realated.css';

function Related() {
  return (
    <div className="Realated">
      <img 
        src={logo} // luego lo llamamos de esta forma nuestro logo
        width={250} 
      />
    </div>
  )
}

export default Related;
import React from 'react';
// está es otro opción de importar imagenes en este caso importaremos el logo
import logo from '../../../image/logo.png';

function Related() {
  return (
    <div>
      <img 
        src={logo} // luego lo llamamos así
        width={250} 
      />
    </div>
  )
}

export default Related;
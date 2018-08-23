import React from 'react';


function Icon(props) {// le pasaremos props como parametro, porque mi componente recibirá propiedades de configuración
  //declararemos una const donde le pasaremos las propiedades que queramos, será igual a props
  const {
    color,
    size, // en vez de algo y ancho, solo utilizaremos size ya que ambos valores serán iguales
  } = props // al ser igual a props cuando lo utilizamos mas abajo, no será necesario utilizar props.color sino que solo color
  return (
    <svg
      fill={color}// fill es la forma de cambiar o dar color a svg
      height={size}
      width={size}
      viewBox="0 0 32 32"
    >
      {props.children} 
    </svg>
  )
}

export default Icon;


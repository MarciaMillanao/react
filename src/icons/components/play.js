import React from 'react';
// Importaremos nuestro componente Icon que es el que tendrá la configuración de nuestros elementos
import Icon from './icon';

//Este será nuestro componente funcional(
function Play(props) {
  //al declararlo así podemos reutilizar codigo, si queremos utilizar en varias partes diferentes nuestro componente pero con diferentes estilos
  // como trabajaremos con las configuraciones de nuetros elementos exportados de otro componente, cuando retornemos envolvemos el elemento del componente, que será nuestro children de el componente exportado
  return (
    <Icon {...props}>
      <path d="M6 4l20 12-20 12z"></path>
    </Icon>
  )
}
//podría dearrollar todos las funciones acá, o en archivos diferentes

/*function Play() { si lo creamos de esta forma, no podremos reutizar código, por lo que lo desarrollaremos de otra foema sin estilos ya prefedinidos
  return (
    //acá ira lo que queremos que retorne nuestro componente, en este caso serán los íconos
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
      <title>play3</title>
      <path d="M6 4l20 12-20 12z"/>
    </svg>
  )
}*/

//de iagual forma se exporta

export default Play;
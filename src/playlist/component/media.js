import React, { Component } from 'react';

// Acá crearemos nuestro componente que puede ser funcional, puro o de estado(que este es el mas clasico)
// Creamos nuestra clase que se llamará Media que va a extender de Component (que ya existe en react)
class Media extends Component {
  // este componente se instanciará con un método llamado render, que tendrá dentro todo el código html
  render() {
    // el código html que rendizaremos debe ir dentro de un return
    return (
      //podemos ponerle clases o lo que queramos a nuestro código html, al igual que fuera html comun, pero se llama JSX, que es la forma que se nombra el escribir html dentro de JS
      <div>
        <div>
          <h3> Practicando React</h3>
          <img scr="" alt="" width={260} height={160}/>
          <p>Marcia Millanao</p>
        </div>
      </div>
    )
  }
}

// Ya tenemos creado nuestra clase (componente), pero para poder utilizarlo debemos exportarlo
export default Media;
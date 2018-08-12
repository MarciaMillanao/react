import React, { Component } from 'react';
//podemos validar los tipados de lo que ingresamos, eso lo hacemos con prop-types que lo instalamos desde nuestra terminal y luego lo importamos
import PropTypes from 'prop-types';
import './media.css';

// Acá crearemos nuestro componente que puede ser funcional, puro o de estado(que este es el mas clasico)
// Creamos nuestra clase que se llamará Media que va a extender de Component (que ya existe en react)
class Media extends Component {
  // este componente se instanciará con un método llamado render, que tendrá dentro todo el código html
  render() {
    // En react podemos utilizar estilos inline, los tenemos que guardar en una variable y luego utilizarla en el elemento que querramos 
    /*const styles = {
      //se declara como un objeto y dentro le daremos los estilos que querramos por lo que no se puede utilizar las propiedades en dos palabras front-size, sino que debemos declararlas de la siguiente manera fontSize y las medidas de px debemos solo ponerles en numero
      container: {
        color: 'green',
        cursor:'pointer',
        width: 260,    
        border: '1px solid red',
        textAlign: 'center',
        backgroundColor: '#fff',
      }
    }*/
    // el código html que rendizaremos debe ir dentro de un return
    return (
      //podemos ponerle clases o lo que queramos a nuestro código html, al igual que fuera html comun, pero se llama JSX, que es la forma que se nombra el escribir html dentro de JS
      // Como la palabra class es reservada en JS, para asignarle una clase a nuestros elementos utilizamos className
      <div className="Media"> 
        <div>
          <h3>{this.props.title}</h3>
          <img 
            src={this.props.image}
            alt="" 
            width={260} height={160}/>
          <p>{this.props.author}</p>
        </div>
      </div>
    )
  }
}

// Luego acá asignamos nuestros proptipes a nuestra clase Media como un objeto y validaremos que tipo de datos debe recibir la sintaxis es propTypes, porque será una propiedad de nuestra clase
Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired, // Así valido que exista de lo contrario funcionara el código pero me enviará un mensaje que falta
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']), // Acá con oneOf, le estoy dicioendo que valide que sea video o audio
}

// Ya tenemos creado nuestra clase (componente), pero para poder utilizarlo debemos exportarlo
export default Media;
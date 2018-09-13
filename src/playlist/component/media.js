import React, { Component } from 'react';
//podemos validar los tipados de lo que ingresamos, eso lo hacemos con prop-types que lo instalamos desde nuestra terminal y luego lo importamos
import PropTypes from 'prop-types';
import './media.css';

// Acá crearemos nuestro componente que puede ser funcional, puro o de estado(que este es el mas clasico)
// Creamos nuestra clase que se llamará Media que va a extender de Component (que ya existe en react)
class Media extends Component {
  // Para que nuestro codigo funcione, debemos enlazar nuestro evento a nuestra class Media, eso se hace a traves de un método llamado constructor, que se autoejecuta una vez que sea instanciada (se autollama, cuando Media se renderiza), recibe como parámetro nuestras propiedades, y tambien utilizamos super, para utilizar nuestras propiedades
  // En react las props son inmutables, si queremos hacer su contenido dinamico, tenemos que cambiar el estado
  /*constructor(props) {
    super(props)
    this.state = {
      author: props.author
    }
    this.handleClick = this.handleClick.bind(this);// con bind(this, me estoy refiriendo a mi class Media, así los temgo enlazado y puedo utilizar mi evento en mis elementos)
  }
  // Existe la opción de enlazar nuestro evento a la class en EC7 que es menos código, al hacerlo con arrow function como de esta forma heredamos el contecto de su poadre, this ya esta disponible para utilizarlo y no es necesario tener un constructor y para utilizar cambio de estados solo es necesario esta linea de código
  //state = {
    //author: 'Karina Yáñez',
  //}
  // handleClick = (event ) => {
    // console.log(this.props.title);
    //this.setState({
      //author: 'Karina Yañez',
    //})
  //}
  handleClick(event) { // Creo mi función, como parametro le paso mi evento y dentro lo que quiero hacer
    //console.log(this.props.title);
    this.setState({
      author: 'Karina Yañez',
    })

  }*/
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
      // También podemos hacer nuestro codigo interactivo, con eventos que vamos a agregar a nuestros elementos
      // this es porque llamaremos a algo que esta dentro de nuestra class Media, handleClick simplemente ese es el nombre de nuestra función (manejador de nuestro click de elementos)
      // Si voy a realizar cambio de estado, ya no será this.props.author, sino que acá utilizaremos this.state.author
      // en src llamo a cover que es el nombre de la clave en el json
      <div className="Media" onClick={this.props.handleClick}>
        <div>
          <h3>{this.props.title}</h3>
          <img 
            src={this.props.cover}
            alt="" 
            width={260} 
            height={160}
            className="Media-image"
            />
          
        </div>
      </div>
    )
  }
}

// Luego acá asignamos nuestros proptipes a nuestra clase Media como un objeto y validaremos que tipo de datos debe recibir la sintaxis es propTypes, porque será una propiedad de nuestra clase
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired, // Así valido que exista de lo contrario funcionara el código pero me enviará un mensaje que falta
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']), // Acá con oneOf, le estoy dicioendo que valide que sea video o audio
}

// Ya tenemos creado nuestra clase (componente), pero para poder utilizarlo debemos exportarlo
export default Media;
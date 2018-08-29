import React from 'react';
//si voy a trabajar o renderizar un componente que yo he creado debo hacerlo de esta forma
import Media from './media.js';
//importamos nuestro componente funcional que hemos creado para luego renderizar
//import Play from '../../icons/components/play'
//import Fullscreen from '../../icons/components/fullscreen.js';
//import Pause from '../../icons/components/pause.js';
//import Volume from '../../icons/components/volume.js';

//function Playlist(props){
  // Al utilizar render debemos recordar que debe retornar algo
  //render() {
    // Quiero que en mi variable me guarde desde la data mi elemento categories, me menciono que posoción y luego el lugar
    //const playlist = this.props.data.categories[0].playlist
    //console.log(this.props.data);
    //console.log(playlist);

    // Dentro de mi return yo le puedo pedir cualquier cosa, como mi ejemplo es un array yo puedo utilizar cualquier método que me sirva para este, en este caso map, así por cada elemento de mi lista devolveré (renderizaré Media), cuando haga el recorrido yo le puede decir que quiero que me devuelva, en este caso un titulo, al agregarle un key, nos permite que cada elemento devuelto tenga su propio key 
    // al poner ...item yo le estoy pasando toda la información de json 
    //return (
      //<div>
        //<Play //este Play es nuestro componente que hemos creado
          //size={100}
          //color="red"
        ///>
        //<Fullscreen
          //size={50}
          //color="green"
        ///>
        //<Pause
          //size={200}
          //color="yellow"
        ///>
        //<Volume
          //size={150}
          //color="orange"
        ///>
        //{
          //playlist.map((item) => {
            //return <Media {...item} key={item.id}/>
          //})
        //}
      //</div>
    //)
  //}
//}

function Playlist(props){
  return (
    <div>
      {
        props.playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;
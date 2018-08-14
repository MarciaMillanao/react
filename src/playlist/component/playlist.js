import React, { Component } from 'react';
//si voy a trabajar o renderizar un componente que yo he creado debo hacerlo de esta forma
import Media from './media.js';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    console.log(this.props.data);
    return (
      <div>
        <Media />
      </div>
    )
  }
}

export default Playlist;
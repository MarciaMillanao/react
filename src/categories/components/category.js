import React from 'react';
import Playlist from '../../playlist/component/playlist';

function Category(props) {
  return (
    <div>
      <h2> {props.title} </h2>
      <p> {props.description} </p>
      <Playlist
        handleOpenModal = {props.handleOpenModal}
        playlist={props.playlist}/>
    </div>
  )
}

export default Category;
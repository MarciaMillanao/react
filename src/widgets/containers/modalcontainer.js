import React, { Component } from 'react';
// importamos createPortal que nos sirve para crear el modal, y esta en react-dom
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
  render() {
    return createPortal(
      this.props.children,
      document.getElementById('modal-container')
    )
  }
}

export default ModalContainer;
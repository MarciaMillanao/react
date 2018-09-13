import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Realated from '../components/realated';
import ModalContainer from '../../widgets/containers/modalcontainer';
import Modal from '../../widgets/components/modal';

// en nuestro evento handleClick, podemos poderle el nombre que nosotros queramos, mas descriptivo así nos permitirá que entendamos de mejor forma nuestro código, ademas que este nombre será el que tenga nuestra función(que la declararemos en es7)
class Home extends Component {
  // esta sera nuestra funcion en ES7 es menos código, más ordenado, de esta forma this esta disponible dentro para poder utilizarlo, así nos evitamos de llamar tantas veces un evento
  // dentro de nuestra const, dejamos mi modal visible en false, debo condicionar mi conponente Modal, en la parte de mi código donde lo renderizo, EC6 nos permite hacerlo de forma muy fácil, si no es necesario tener un if y un else, simpletente lo hago con un ternario ej. { this.state.modalVisible && }, para que esto nos funciones, adicionalmente debo inicializar mi modal y así poder realizar cambio de estado
  state = {
    modalVisible: false, //porque verdadero, porque se verá en iniciar nuestra página
  }
  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    })
  }

  handleModalClose = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render(){
    return (
      <HomeLayout>
        <Realated />
        <Categories 
        categories={this.props.data.categories} 
        handleOpenModal = {this.handleOpenModal}
        />
        { 
          this.state.modalVisible && 
          <ModalContainer>
            <Modal 
              handleClick={this.handleModalClose}
              >
              <h1>Hola Marcia </h1>
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
    )
  }
}

export default Home;

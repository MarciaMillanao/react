import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Realated from '../components/realated';
import ModalContainer from '../../widgets/containers/modalcontainer';
import Modal from '../../widgets/components/modal';

class Home extends Component {
  render(){
    return (
      <HomeLayout>
        <Realated />
        <Categories categories={this.props.data.categories} />
        <ModalContainer>
          <Modal >
            <h1>Hola Marcia </h1>
          </Modal>
        </ModalContainer>
      </HomeLayout>
    )
  }
}

export default Home;

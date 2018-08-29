import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Realated from '../components/realated';

class Home extends Component {
  render(){
    return (
      <HomeLayout>
        <Realated />
        <Categories categories={this.props.data.categories} />
      </HomeLayout>
    )
  }
}

export default Home;

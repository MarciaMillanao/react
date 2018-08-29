import React from 'react';
import './home-layout.css';

//este será un componente funcional
function HomeLayout(props) {
  return (
    <section className="Homelayout">
      {props.children}
    </section>
  )
}

export default HomeLayout;
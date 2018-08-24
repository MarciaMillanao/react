import React from 'react';

//este será un componente funcional
function HomeLayout(props) {
  return (
    <section>
      Layout
      {props.children}
    </section>
  )
}

export default HomeLayout;
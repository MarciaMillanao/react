import React from 'react';

//este será un componente funcional
function HomeLayout(props) {
  return (
    <section>
      {props.children}
    </section>
  )
}

export default HomeLayout;
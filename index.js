//console.log('Hola Marcia');
// React me servirá para crear mis omponentes
import React from 'react';
// ReactDom me servirá para renderizar mis componentes creados
import ReactDOM from 'react-dom';

// Acá es donde guardaremos en una variable nuestro id de html (eta es la parte de DOM que ya existe)
const container = document.getElementById('app');
// ReactDom tiene un método llamado render que rrsive dos parámetros uno que voy a renderizar y el otro donde lo voy a renderizar
// Lo que voy a renderizar puede ser un componente o un elemento de React
// Y donde debe ser una parte del DOM que ya exista (index.html)
const holaMarcia = <h1>Hola Marcia</h1>;

ReactDOM.render(holaMarcia ,container);

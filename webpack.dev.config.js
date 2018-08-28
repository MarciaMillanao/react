const path = require('path');

module.exports = {
  entry: {
    "home": path.resolve(__dirname, 'src/homepages/home.js'), // esta es la ruta de archivo que va a compilar
  },
  output: {
    path: path.resolve(__dirname, 'dist'),// esta es la salida que tendrá que estará en la carpeta dist
    filename: 'js/[name].js' // dentro de js y en el archivo name.js 
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      },
    ]
  }
}

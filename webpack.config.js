const path = require('path')

const basePath = __dirname
const distPath = 'dist'
module.exports = {
    // mode - modo de funcionamiento  - ofuscara el codiigo para las eficas en los navegadores
    mode : 'production',
    // entry point
    entry: {
        app: './src/index.js'
    },
    module:{
        rules:[
            {
                test : /\.js/,
                exclude: /node_modules/, //para excluir
                use:['babel-loader'] //cuando encuentre usara babel
            }
        ]
    },
    // output point
    output:{
        path: path.join(basePath, distPath),
        filename : 'bundle2.js', 
    }

}
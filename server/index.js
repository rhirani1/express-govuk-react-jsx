//Babel to ensure imports inside nodeJS work as required
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')

const baseConfig = require('./webpack.config')
const merge = require('webpack-merge')

const config = merge(baseConfig, {
    mode: 'production'
})

module.exports = config

const express = require('express');

const { Nuxt, Builder } = require('nuxt')

const app = express();

let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)

if(config.dev){
  const builder = new Builder(nuxt)
  builder.build()
}

const api = require('./api')

app.use('/api', api)
app.use(nuxt.render)

module.exports = app;

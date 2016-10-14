import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import http from 'http'
import socketio from 'socket.io'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.dev.js'

import users from './routes/users.js'
import sockets from './routes/sockets.js'
import db from './models/db.js'


let app = express()
let server = http.Server(app)
let io = socketio(server)

app.use(bodyParser.json())

app.use(function(req, res, next){
  res.io = io;
  next();
});

io.on('connection', sockets)

app.use('/api/users', users)

const compiler = webpack(webpackConfig)
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))
app.use(webpackHotMiddleware(compiler))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

server.listen('3000', () => {
  console.log('Listening to port 3000')
})

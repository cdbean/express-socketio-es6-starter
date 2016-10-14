
const sockets = (socket) => {
  socket.emit('message', 'hello socket')
}

export default sockets

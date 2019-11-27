function useSocket(socket) {
  const socketOn = (event, callback) => {
    socket.on(event, callback);
  };

  const socketEmit = (event, payload) => {
    socket.emit(event, payload);
  };

  return [socketOn, socketEmit];
}

export default useSocket;

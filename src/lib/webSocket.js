const webSocket = (config = {}) => {
  return new WebSocket("ws://localhost:8080", null, config);
};

export default webSocket;
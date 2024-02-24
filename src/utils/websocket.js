import { baseWsEndpoint } from '/src/constants';

export function connectWebSocket(onMessage, onOpen, onClose, onError) {
  const wsUrl = baseWsEndpoint;
  const ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    console.log('WebSocket Connected');
    if (onOpen) onOpen();
  };

  ws.onmessage = event => {
    const message = JSON.parse(event.data);
    if (onMessage) onMessage(message);
  };

  ws.onclose = () => {
    console.log('WebSocket Disconnected');
    if (onClose) onClose();
  };

  ws.onerror = error => {
    console.error('WebSocket Error', error);
    if (onError) onError(error);
  };

  // Return an object containing methods to interact with the WebSocket
  return {
    sendMessage: message => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(message));
      } else {
        console.error('WebSocket is not connected.');
      }
    },
    disconnect: () => {
      if (ws) ws.close();
    },
  };
}

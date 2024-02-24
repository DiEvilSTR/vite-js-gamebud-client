// ChatWindow.jsx
import './ChatWindow.css';

import { useEffect, useState } from 'react';

import { connectWebSocket } from '/src/utils/websocket'; // Adjust the import path as needed

export function ChatWindow() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { sendMessage, disconnect } = connectWebSocket(
      message => setMessages(prevMessages => [...prevMessages, message]),
      () => console.log('WebSocket Connected'),
      () => console.log('WebSocket Disconnected'),
      error => console.error('WebSocket Error', error)
    );

    // Use sendMessage as needed, e.g., in a button click handler

    return () => {
      disconnect(); // Clean up by disconnecting the WebSocket when the component unmounts
    };
  }, []);

  return <div className="chatWindow">{/* Your chat window UI */}</div>;
}

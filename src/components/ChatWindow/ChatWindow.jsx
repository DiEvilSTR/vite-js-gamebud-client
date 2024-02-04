import './ChatWindow.css'; // Assuming CSS file is in the same directory

import { useEffect, useRef, useState } from 'react';

export function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('wss://yourdomain.com/ws');
    ws.current.onopen = () => console.log('WebSocket Connected');
    ws.current.onclose = () => console.log('WebSocket Disconnected');
    ws.current.onmessage = e => {
      const message = JSON.parse(e.data);
      setMessages(prevMessages => [...prevMessages, message]);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = message => {
    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message));
    }
  };

  return (
    <div className="chatWindow">
      <div className="messageList">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg.text} {/* Assuming message object has a text field */}
          </div>
        ))}
      </div>
      <button onClick={() => sendMessage({ text: 'Hello!' })}>Send Message</button>
      {/* Placeholder button for demonstration. Implement an input field for user messages */}
    </div>
  );
}

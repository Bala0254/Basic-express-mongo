import { WebSocketServer } from 'ws';

export default function initializeWebSocket(server) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws) => {
    console.log('🟢 New WebSocket client connected');

    ws.on('message', (message) => {
       const decodedMessage = message.toString();
        console.log('📨 Received:', decodedMessage);
        ws.send(`Echo: ${decodedMessage}`);
    });

    ws.on('close', () => {
      console.log('🔴 WebSocket client disconnected');
    });
  });

  console.log('✅ WebSocket server initialized');
}

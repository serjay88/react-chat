export default {
  API_URI:
    process.env.NODE_ENV === 'production'
      ? 'https://hasky-react-chat.herokuapp.com/'
      : 'http://localhost:8000/v1',
  SOCKETS_URI:
    process.env.NODE_ENV === 'production'
      ? 'wss://hasky-react-chat.herokuapp.com/'
      : 'ws://localhost:8000/',
};

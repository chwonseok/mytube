import express from 'express';

const PORT = 4000;
const app = express();

app.get('/', () => console.log('going to home'));

const listeningHandler = () =>
  console.log(`server listening on http://localhost:${PORT}`);

app.listen(PORT, listeningHandler);

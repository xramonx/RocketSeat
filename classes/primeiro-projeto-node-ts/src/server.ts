import express from 'express';
// src/server.ts
import routes from './routes';

const app = express();
app.get('/', (request, response) => {
  const today = new Date();
  return response.json(`ᓚᘏᗢ Hello World - ${today.getTime()}`);
});

app.listen(3333, () => {
  console.log('ᓚᘏᗢ Server started on port 3333!');
});

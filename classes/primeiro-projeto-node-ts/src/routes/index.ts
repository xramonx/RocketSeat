// src/routes/index.ts
import { Router } from 'express';

const routes = Router();

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = { name, email };
  // return response.json({ message: 'Hello World' });
  // const today = new Date();
  // return response.json(`ᓚᘏᗢ Hello World - ${today.getTime()}`);
  return response.json(user);
});

export default routes;

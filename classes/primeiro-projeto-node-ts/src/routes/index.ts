// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionRouter from './sessions.routes';

const routes = Router();

// use serve para todos os métodos e todas as rotas
// redefinindo que todas as rotas passarão por /appointments/
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);

export default routes;

// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// use serve para todos os métodos e todas as rotas
// redefinindo que todas as rotas passarão por /appointments/
routes.use('/appointments', appointmentsRouter);

export default routes;

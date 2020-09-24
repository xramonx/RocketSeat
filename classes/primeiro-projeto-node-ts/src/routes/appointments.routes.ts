import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../Services/CreateAppointmentService';
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// SOC(separation of concerns)
// Rote SOC: Receive a request, call another file, return a response;

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();
  return response.json(appointments);
});

// POST http://localhost:3333/apointments definido no router que a raíz / está em /appointments/
appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const CreateAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );
    const appointment = CreateAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment); // .json({ message: 'hello world' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;

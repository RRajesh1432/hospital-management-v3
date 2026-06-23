import axios from "axios";

const API_URL = "http://localhost:5000/appointments";

export const getAllAppointments = () => axios.get(API_URL);

export const getAppointmentById = (id) => axios.get(`${API_URL}/${id}`);

export const createAppointment = (appointment) =>
  axios.post(API_URL, appointment);

export const updateAppointment = (id, appointment) =>
  axios.put(`${API_URL}/${id}`, appointment);

export const deleteAppointment = (id) => axios.delete(`${API_URL}/${id}`);

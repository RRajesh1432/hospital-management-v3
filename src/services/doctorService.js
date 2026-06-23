import axios from "axios";

const API_URL = "http://localhost:5000/doctors";

export const getAllDoctors = () => axios.get(API_URL);

export const getDoctorById = (id) => axios.get(`${API_URL}/${id}`);

export const createDoctor = (doctor) => axios.post(API_URL, doctor);

export const updateDoctor = (id, doctor) =>
  axios.put(`${API_URL}/${id}`, doctor);

export const deleteDoctor = (id) => axios.delete(`${API_URL}/${id}`);

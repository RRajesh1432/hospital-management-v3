import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

import axios from "axios";

import {
  createAppointment,
  updateAppointment,
  getAppointmentById,
} from "../../services/appointmentService";

function AppointmentForm() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [doctors, setDoctors] = useState([]);

  const [patients, setPatients] = useState([]);

  const [appointment, setAppointment] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
    status: "Scheduled",
  });

  useEffect(() => {
    loadData();

    if (id) {
      loadAppointment();
    }
  }, []);

  const loadData = async () => {
    const doctorRes = await axios.get("http://localhost:5000/doctors");

    const patientRes = await axios.get("http://localhost:5000/patients");

    setDoctors(doctorRes.data);
    setPatients(patientRes.data);
  };

  const loadAppointment = async () => {
    const response = await getAppointmentById(id);

    setAppointment(response.data);
  };

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const saveAppointment = async (e) => {
    e.preventDefault();

    if (id) {
      await updateAppointment(id, appointment);
    } else {
      await createAppointment(appointment);
    }

    navigate("/appointments");
  };

  return (
    <Layout>
      <div className="card shadow">
        <div className="card-body">
          <h3>{id ? "Edit Appointment" : "Book Appointment"}</h3>

          <form onSubmit={saveAppointment}>
            <select
              className="form-select mb-3"
              name="patientName"
              value={appointment.patientName}
              onChange={handleChange}
            >
              <option>Select Patient</option>

              {patients.map((patient) => (
                <option key={patient.id}>{patient.name}</option>
              ))}
            </select>

            <select
              className="form-select mb-3"
              name="doctorName"
              value={appointment.doctorName}
              onChange={handleChange}
            >
              <option>Select Doctor</option>

              {doctors.map((doctor) => (
                <option key={doctor.id}>{doctor.name}</option>
              ))}
            </select>

            <input
              type="date"
              className="form-control mb-3"
              name="date"
              value={appointment.date}
              onChange={handleChange}
            />

            <input
              type="time"
              className="form-control mb-3"
              name="time"
              value={appointment.time}
              onChange={handleChange}
            />

            <select
              className="form-select mb-3"
              name="status"
              value={appointment.status}
              onChange={handleChange}
            >
              <option>Scheduled</option>

              <option>Completed</option>

              <option>Cancelled</option>
            </select>

            <button className="btn btn-success">Save Appointment</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AppointmentForm;

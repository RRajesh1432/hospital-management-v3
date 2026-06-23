import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

import {
  getAllAppointments,
  deleteAppointment,
} from "../../services/appointmentService";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const response = await getAllAppointments();

    setAppointments(response.data);
  };

  const removeAppointment = async (id) => {
    if (!window.confirm("Delete Appointment?")) return;

    await deleteAppointment(id);

    loadAppointments();
  };

  return (
    <Layout>
      <div className="d-flex justify-content-between mb-3">
        <h2>Appointments</h2>

        <Link to="/appointments/add" className="btn btn-primary">
          Book Appointment
        </Link>
      </div>

      <table className="table table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>

              <td>{appointment.patientName}</td>

              <td>{appointment.doctorName}</td>

              <td>{appointment.date}</td>

              <td>{appointment.time}</td>

              <td>
                <span className="badge bg-success">{appointment.status}</span>
              </td>

              <td>
                <Link
                  className="btn btn-info btn-sm me-2"
                  to={`/appointments/view/${appointment.id}`}
                >
                  View
                </Link>

                <Link
                  className="btn btn-warning btn-sm me-2"
                  to={`/appointments/edit/${appointment.id}`}
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeAppointment(appointment.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default AppointmentList;

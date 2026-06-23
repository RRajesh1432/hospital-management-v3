import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

import { getAppointmentById } from "../../services/appointmentService";

function AppointmentDetails() {
  const { id } = useParams();

  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    loadAppointment();
  }, []);

  const loadAppointment = async () => {
    const response = await getAppointmentById(id);

    setAppointment(response.data);
  };

  return (
    <Layout>
      <div className="card shadow">
        <div className="card-body">
          <h2>Appointment Details</h2>

          <hr />

          <p>
            <strong>Patient:</strong> {appointment.patientName}
          </p>

          <p>
            <strong>Doctor:</strong> {appointment.doctorName}
          </p>

          <p>
            <strong>Date:</strong> {appointment.date}
          </p>

          <p>
            <strong>Time:</strong> {appointment.time}
          </p>

          <p>
            <strong>Status:</strong> {appointment.status}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default AppointmentDetails;

import { useEffect, useState } from "react";
import axios from "axios";

function RecentAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const response = await axios.get("http://localhost:5000/appointments");

    setAppointments(response.data.slice(-5).reverse());
  };

  return (
    <div className="card shadow">
      <div className="card-header">Recent Appointments</div>

      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <tr key={a.id}>
                <td>{a.patientName}</td>
                <td>{a.doctorName}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentAppointments;

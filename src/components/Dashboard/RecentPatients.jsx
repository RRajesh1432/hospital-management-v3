import { useEffect, useState } from "react";
import axios from "axios";

function RecentPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const response = await axios.get("http://localhost:5000/patients");

    setPatients(response.data.slice(-5).reverse());
  };

  return (
    <div className="card shadow">
      <div className="card-header">Recent Patients</div>

      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Disease</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.disease}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentPatients;

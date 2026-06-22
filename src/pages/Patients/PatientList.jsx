import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllPatients, deletePatient } from "../../services/patientService";

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const response = await getAllPatients();
    setPatients(response.data);
  };

  const removePatient = async (id) => {
    await deletePatient(id);
    loadPatients();
  };

  return (
    <div className="container mt-4">
      <h2>Patients</h2>

      <Link to="/patients/add" className="btn btn-primary mb-3">
        Add Patient
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Disease</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.disease}</td>

              <td>
                <Link
                  to={`/patients/view/${patient.id}`}
                  className="btn btn-info me-2"
                >
                  View
                </Link>

                <Link
                  to={`/patients/edit/${patient.id}`}
                  className="btn btn-warning me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => removePatient(patient.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;

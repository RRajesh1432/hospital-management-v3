import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/Common/SearchBar";

import { getAllPatients, deletePatient } from "../../services/patientService";

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const response = await getAllPatients();
    setPatients(response.data);
  };

  const removePatient = async (id) => {
    if (!window.confirm("Delete this patient?")) return;

    await deletePatient(id);
    loadPatients();
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Layout>
      <div className="d-flex justify-content-between mb-3">
        <h2>Patients</h2>

        <Link to="/patients/add" className="btn btn-primary">
          Add Patient
        </Link>
      </div>

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Patient..."
      />

      <table className="table table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Disease</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.bloodGroup}</td>
              <td>{patient.disease}</td>
              <td>{patient.doctorAssigned}</td>

              <td>
                <Link
                  className="btn btn-info btn-sm me-2"
                  to={`/patients/view/${patient.id}`}
                >
                  View
                </Link>

                <Link
                  className="btn btn-warning btn-sm me-2"
                  to={`/patients/edit/${patient.id}`}
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removePatient(patient.id)}
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

export default PatientList;

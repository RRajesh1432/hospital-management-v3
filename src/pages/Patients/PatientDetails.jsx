import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

import { getPatientById } from "../../services/patientService";

function PatientDetails() {
  const { id } = useParams();

  const [patient, setPatient] = useState({});

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    const response = await getPatientById(id);

    setPatient(response.data);
  };

  return (
    <Layout>
      <div className="card shadow">
        <div className="card-body">
          <h2>Patient Details</h2>

          <hr />

          <p>
            <strong>Name:</strong> {patient.name}
          </p>

          <p>
            <strong>Age:</strong> {patient.age}
          </p>

          <p>
            <strong>Gender:</strong> {patient.gender}
          </p>

          <p>
            <strong>Phone:</strong> {patient.phone}
          </p>

          <p>
            <strong>Blood Group:</strong> {patient.bloodGroup}
          </p>

          <p>
            <strong>Disease:</strong> {patient.disease}
          </p>

          <p>
            <strong>Assigned Doctor:</strong> {patient.doctorAssigned}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default PatientDetails;

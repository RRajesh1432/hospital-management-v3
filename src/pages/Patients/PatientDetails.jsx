import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="container mt-4">
      <h2>Patient Details</h2>

      <h4>Name: {patient.name}</h4>
      <h4>Age: {patient.age}</h4>
      <h4>Gender: {patient.gender}</h4>
      <h4>Disease: {patient.disease}</h4>
    </div>
  );
}

export default PatientDetails;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  createPatient,
  getPatientById,
  updatePatient,
} from "../../services/patientService";

function PatientForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
  });

  useEffect(() => {
    if (id) {
      loadPatient();
    }
  }, []);

  const loadPatient = async () => {
    const response = await getPatientById(id);
    setPatient(response.data);
  };

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const savePatient = async (e) => {
    e.preventDefault();

    if (id) {
      await updatePatient(id, patient);
    } else {
      await createPatient(patient);
    }

    navigate("/patients");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Patient" : "Add Patient"}</h2>

      <form onSubmit={savePatient}>
        <input
          className="form-control mb-3"
          name="name"
          placeholder="Patient Name"
          value={patient.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="age"
          placeholder="Age"
          value={patient.age}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="gender"
          placeholder="Gender"
          value={patient.gender}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="disease"
          placeholder="Disease"
          value={patient.disease}
          onChange={handleChange}
        />

        <button className="btn btn-success">Save Patient</button>
      </form>
    </div>
  );
}

export default PatientForm;

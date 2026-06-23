import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

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
    phone: "",
    bloodGroup: "",
    disease: "",
    doctorAssigned: "",
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
    <Layout>
      <div className="card shadow">
        <div className="card-body">
          <h3>{id ? "Edit Patient" : "Add Patient"}</h3>

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

            <select
              className="form-select mb-3"
              name="gender"
              value={patient.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input
              className="form-control mb-3"
              name="phone"
              placeholder="Phone"
              value={patient.phone}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              name="bloodGroup"
              placeholder="Blood Group"
              value={patient.bloodGroup}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              name="disease"
              placeholder="Disease"
              value={patient.disease}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              name="doctorAssigned"
              placeholder="Assigned Doctor"
              value={patient.doctorAssigned}
              onChange={handleChange}
            />

            <button className="btn btn-success">Save Patient</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default PatientForm;

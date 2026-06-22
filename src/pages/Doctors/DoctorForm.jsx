import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  createDoctor,
  getDoctorById,
  updateDoctor,
} from "../../services/doctorService";

function DoctorForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
  });

  useEffect(() => {
    if (id) {
      loadDoctor();
    }
  }, []);

  const loadDoctor = async () => {
    const response = await getDoctorById(id);
    setDoctor(response.data);
  };

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const saveDoctor = async (e) => {
    e.preventDefault();

    if (id) {
      await updateDoctor(id, doctor);
    } else {
      await createDoctor(doctor);
    }

    navigate("/doctors");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Doctor" : "Add Doctor"}</h2>

      <form onSubmit={saveDoctor}>
        <input
          className="form-control mb-3"
          name="name"
          placeholder="Doctor Name"
          value={doctor.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="specialization"
          placeholder="Specialization"
          value={doctor.specialization}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="experience"
          placeholder="Experience"
          value={doctor.experience}
          onChange={handleChange}
        />

        <button className="btn btn-success">Save Doctor</button>
      </form>
    </div>
  );
}

export default DoctorForm;

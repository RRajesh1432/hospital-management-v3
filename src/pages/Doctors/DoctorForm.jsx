import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

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
    email: "",
    phone: "",
    specialization: "",
    qualification: "",
    experience: "",
    status: "Active",
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
    <Layout>
      <div className="card shadow">
        <div className="card-body">
          <h3>{id ? "Edit Doctor" : "Add Doctor"}</h3>

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
              name="email"
              placeholder="Email"
              value={doctor.email}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              name="phone"
              placeholder="Phone"
              value={doctor.phone}
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
              name="qualification"
              placeholder="Qualification"
              value={doctor.qualification}
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              name="experience"
              placeholder="Experience"
              value={doctor.experience}
              onChange={handleChange}
            />

            <select
              className="form-select mb-3"
              name="status"
              value={doctor.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <button className="btn btn-success">Save Doctor</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default DoctorForm;

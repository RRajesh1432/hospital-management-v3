import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

import { getDoctorById } from "../../services/doctorService";

function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    loadDoctor();
  }, []);

  const loadDoctor = async () => {
    const response = await getDoctorById(id);

    setDoctor(response.data);
  };

  return (
    <Layout>
      <div className="card shadow">
        <div className="card-body">
          <h2>Doctor Details</h2>

          <hr />

          <p>
            <strong>Name:</strong> {doctor.name}
          </p>

          <p>
            <strong>Email:</strong> {doctor.email}
          </p>

          <p>
            <strong>Phone:</strong> {doctor.phone}
          </p>

          <p>
            <strong>Qualification:</strong> {doctor.qualification}
          </p>

          <p>
            <strong>Specialization:</strong> {doctor.specialization}
          </p>

          <p>
            <strong>Experience:</strong> {doctor.experience} Years
          </p>

          <p>
            <strong>Status:</strong> {doctor.status}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default DoctorDetails;

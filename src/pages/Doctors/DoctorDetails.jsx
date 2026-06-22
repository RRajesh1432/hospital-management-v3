import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="container mt-4">
      <h2>Doctor Details</h2>

      <h4>Name: {doctor.name}</h4>
      <h4>Specialization: {doctor.specialization}</h4>
      <h4>Experience: {doctor.experience}</h4>
    </div>
  );
}

export default DoctorDetails;

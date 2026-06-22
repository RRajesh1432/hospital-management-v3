import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllDoctors, deleteDoctor } from "../../services/doctorService";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    const response = await getAllDoctors();
    setDoctors(response.data);
  };

  const removeDoctor = async (id) => {
    await deleteDoctor(id);
    loadDoctors();
  };

  return (
    <div className="container mt-4">
      <h2>Doctors</h2>

      <Link to="/doctors/add" className="btn btn-primary mb-3">
        Add Doctor
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.experience}</td>

              <td>
                <Link
                  className="btn btn-info me-2"
                  to={`/doctors/view/${doctor.id}`}
                >
                  View
                </Link>

                <Link
                  className="btn btn-warning me-2"
                  to={`/doctors/edit/${doctor.id}`}
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => removeDoctor(doctor.id)}
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

export default DoctorList;

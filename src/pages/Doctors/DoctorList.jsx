import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Layout from "../../components/Layout/Layout";
import Pagination from "../../components/Common/Pagination";
import Loader from "../../components/Common/Loader";
import SearchBar from "../../components/Common/SearchBar";

import { getAllDoctors, deleteDoctor } from "../../services/doctorService";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    try {
      setLoading(true);

      const response = await getAllDoctors();

      setDoctors(response.data);
    } catch (error) {
      toast.error("Failed to load doctors");
    } finally {
      setLoading(false);
    }
  };

  const removeDoctor = async (id) => {
    const confirmDelete = window.confirm("Delete this doctor?");

    if (!confirmDelete) return;

    try {
      await deleteDoctor(id);

      toast.success("Doctor Deleted Successfully");

      loadDoctors();
    } catch (error) {
      toast.error("Failed To Delete Doctor");
    }
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()),
  );

  const offset = currentPage * itemsPerPage;

  const currentDoctors = filteredDoctors.slice(offset, offset + itemsPerPage);

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Doctors Management</h2>

            <Link to="/doctors/add" className="btn btn-primary">
              Add Doctor
            </Link>
          </div>

          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Doctor..."
          />

          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Specialization</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentDoctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.id}</td>

                  <td>{doctor.name}</td>

                  <td>{doctor.email}</td>

                  <td>{doctor.phone}</td>

                  <td>{doctor.specialization}</td>

                  <td>
                    <span
                      className={`badge ${
                        doctor.status === "Active" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {doctor.status}
                    </span>
                  </td>

                  <td>
                    <Link
                      className="btn btn-info btn-sm me-2"
                      to={`/doctors/view/${doctor.id}`}
                    >
                      View
                    </Link>

                    <Link
                      className="btn btn-warning btn-sm me-2"
                      to={`/doctors/edit/${doctor.id}`}
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeDoctor(doctor.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <Pagination
            pageCount={Math.ceil(filteredDoctors.length / itemsPerPage)}
            onPageChange={(data) => setCurrentPage(data.selected)}
          /> */}
        </div>
      </div>
    </Layout>
  );
}

export default DoctorList;

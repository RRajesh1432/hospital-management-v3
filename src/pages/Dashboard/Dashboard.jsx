import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="container mt-5">
      <h1>Hospital Dashboard</h1>

      <div className="mt-4">
        <Link to="/doctors" className="btn btn-primary me-3">
          Manage Doctors
        </Link>
        
        <Link to="/patients" className="btn btn-success me-3">
          Manage Patients
        </Link>

        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="container mt-5">
      <h1>Hospital Dashboard</h1>

      <Link to="/doctors" className="btn btn-success me-3">
        Doctors Module
      </Link>

      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;

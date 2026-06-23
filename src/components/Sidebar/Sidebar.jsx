import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
} from "react-icons/fa";


function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/dashboard",
    },
    {
      name: "Doctors",
      icon: <FaUserMd />,
      path: "/doctors",
    },
    {
      name: "Patients",
      icon: <FaUsers />,
      path: "/patients",
    },
    {
      name: "Appointments",
      icon: <FaCalendarCheck />,
      path: "/appointments",
    },
    {
      name: "Billing",
      icon: <FaMoneyBillWave />,
      path: "/billing",
    },
   
    {
      name: "Reports",
      path: "/reports",
      icon: <FaChartBar />,
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div
      className="bg-dark text-white"
      style={{
        width: "260px",
        minHeight: "100vh",
      }}
    >
      <div className="text-center p-4 border-bottom">
        <h3>🏥 HMS</h3>
      </div>

      <div className="p-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`d-flex align-items-center text-decoration-none p-3 mb-2 rounded ${
              location.pathname === item.path
                ? "bg-primary text-white"
                : "text-light"
            }`}
          >
            <span className="me-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

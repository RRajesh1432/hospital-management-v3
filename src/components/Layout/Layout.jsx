import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

import { useTheme } from "../../context/ThemeContext";

function Layout({ children }) {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="d-flex">
        <Sidebar />

        <div
          className="flex-grow-1 p-4"
          style={{
            minHeight: "100vh",
          }}
        >
          <Navbar />

          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className="
      d-flex
      justify-content-between
      align-items-center
      p-3
      bg-white
      shadow-sm
      rounded
      "
    >
      <h4>Hospital Dashboard</h4>

      <button className="btn btn-primary" onClick={toggleTheme}>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}

export default Navbar;

import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

import DoctorList from "../pages/Doctors/DoctorList";
import DoctorForm from "../pages/Doctors/DoctorForm";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import ProtectedRoute from "../components/ProtectedRoute";

import PatientList from "../pages/Patients/PatientList";
import PatientForm from "../pages/Patients/PatientForm";
import PatientDetails from "../pages/Patients/PatientDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctors"
        element={
          <ProtectedRoute>
            <DoctorList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctors/add"
        element={
          <ProtectedRoute>
            <DoctorForm />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctors/edit/:id"
        element={
          <ProtectedRoute>
            <DoctorForm />
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctors/view/:id"
        element={
          <ProtectedRoute>
            <DoctorDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patients"
        element={
          <ProtectedRoute>
            <PatientList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patients/add"
        element={
          <ProtectedRoute>
            <PatientForm />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patients/edit/:id"
        element={
          <ProtectedRoute>
            <PatientForm />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patients/view/:id"
        element={
          <ProtectedRoute>
            <PatientDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;

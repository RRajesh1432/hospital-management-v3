import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

import DoctorList from "../pages/Doctors/DoctorList";
import DoctorForm from "../pages/Doctors/DoctorForm";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import PatientList from "../pages/Patients/PatientList";
import PatientForm from "../pages/Patients/PatientForm";
import PatientDetails from "../pages/Patients/PatientDetails";

import AppointmentList from "../pages/Appointments/AppointmentList";
import AppointmentForm from "../pages/Appointments/AppointmentForm";
import AppointmentDetails from "../pages/Appointments/AppointmentDetails";

import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";

import BillingList from "../pages/Billing/BillingList";
import BillingForm from "../pages/Billing/BillingForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      {/* Doctors */}
      <Route path="/doctors" element={<DoctorList />} />

      <Route path="/doctors/add" element={<DoctorForm />} />

      <Route path="/doctors/edit/:id" element={<DoctorForm />} />

      <Route path="/doctors/view/:id" element={<DoctorDetails />} />

      {/* Patients */}
      <Route path="/patients" element={<PatientList />} />

      <Route path="/patients/add" element={<PatientForm />} />

      <Route path="/patients/edit/:id" element={<PatientForm />} />

      <Route path="/patients/view/:id" element={<PatientDetails />} />

      {/* Appointments */}
      <Route path="/appointments" element={<AppointmentList />} />

      <Route path="/appointments/add" element={<AppointmentForm />} />

      <Route path="/appointments/edit/:id" element={<AppointmentForm />} />

      <Route path="/appointments/view/:id" element={<AppointmentDetails />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="/billing" element={<BillingList />} />

      <Route path="/billing/add" element={<BillingForm />} />

      <Route path="/billing/edit/:id" element={<BillingForm />} />
    </Routes>
  );
}

export default AppRoutes;

import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../../components/Layout/Layout";

import StatCard from "../../components/Dashboard/StatCard";
import PatientChart from "../../components/Dashboard/PatientChart";
import AppointmentChart from "../../components/Dashboard/AppointmentChart";
import RecentAppointments from "../../components/Dashboard/RecentAppointments";

import {
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

function Dashboard() {
  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const doctors = await axios.get("http://localhost:5000/doctors");

      const patients = await axios.get("http://localhost:5000/patients");

      const appointments = await axios.get(
        "http://localhost:5000/appointments",
      );

      setDoctorCount(doctors.data.length);

      setPatientCount(patients.data.length);

      setAppointmentCount(appointments.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2 className="mb-4">Dashboard Overview</h2>

      <div className="row g-4">
        <StatCard
          title="Doctors"
          value={doctorCount}
          icon={<FaUserMd />}
          color="primary"
        />

        <StatCard
          title="Patients"
          value={patientCount}
          icon={<FaUsers />}
          color="success"
        />

        <StatCard
          title="Appointments"
          value={appointmentCount}
          icon={<FaCalendarCheck />}
          color="warning"
        />

        <StatCard
          title="Revenue"
          value="₹50,000"
          icon={<FaMoneyBillWave />}
          color="danger"
        />
      </div>

      <div className="row mt-4">
        <div className="col-lg-6">
          <PatientChart />
        </div>

        <div className="col-lg-6">
          <AppointmentChart />
        </div>
      </div>

      <div className="mt-4">
        <RecentAppointments />
      </div>
    </Layout>
  );
}

export default Dashboard;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PatientChart() {
  const data = [
    { month: "Jan", patients: 20 },
    { month: "Feb", patients: 35 },
    { month: "Mar", patients: 50 },
    { month: "Apr", patients: 60 },
    { month: "May", patients: 75 },
    { month: "Jun", patients: 90 },
  ];

  return (
    <div className="card shadow p-3">
      <h5>Patient Growth</h5>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="patients" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PatientChart;

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AppointmentChart() {
  const data = [
    { day: "Mon", count: 5 },
    { day: "Tue", count: 8 },
    { day: "Wed", count: 12 },
    { day: "Thu", count: 10 },
    { day: "Fri", count: 15 },
    { day: "Sat", count: 20 },
  ];

  return (
    <div className="card shadow p-3">
      <h5>Appointments Trend</h5>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line dataKey="count" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AppointmentChart;

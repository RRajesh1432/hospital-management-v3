import Layout from "../../components/Layout/Layout";

function Reports() {
  return (
    <Layout>
      <h2 className="mb-4">Reports Dashboard</h2>

      <div className="row">
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <h5>Total Doctors</h5>
              <h2>25</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <h5>Total Patients</h5>
              <h2>120</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <h5>Appointments</h5>
              <h2>45</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <h5>Revenue</h5>
              <h2>₹50K</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Reports;

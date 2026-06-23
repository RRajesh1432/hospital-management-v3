import Layout from "../../components/Layout/Layout";

function Settings() {
  return (
    <Layout>
      <h2>Settings</h2>

      <div className="card shadow mt-4">
        <div className="card-body">
          <h5>Profile Settings</h5>

          <input className="form-control mb-3" placeholder="Hospital Name" />

          <input className="form-control mb-3" placeholder="Email" />

          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;

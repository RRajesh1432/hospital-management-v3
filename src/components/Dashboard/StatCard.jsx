function StatCard({ title, value, icon, color }) {
  return (
    <div className="col-md-3">
      <div className={`card bg-${color} text-white shadow`}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h6>{title}</h6>
              <h2>{value}</h2>
            </div>

            <div className="fs-1">{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

import { getAllBills, deleteBill } from "../../services/billingService";

function BillingList() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    loadBills();
  }, []);

  const loadBills = async () => {
    const response = await getAllBills();
    setBills(response.data);
  };

  const removeBill = async (id) => {
    const confirmDelete = window.confirm("Delete this bill?");

    if (!confirmDelete) return;

    await deleteBill(id);
    loadBills();
  };

  return (
    <Layout>
      <div className="d-flex justify-content-between mb-3">
        <h2>Billing Management</h2>

        <Link to="/billing/add" className="btn btn-primary">
          Create Bill
        </Link>
      </div>

      <table className="table table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.patientName}</td>
              <td>₹{bill.amount}</td>
              <td>{bill.paymentMode}</td>
              <td>
                <span
                  className={`badge ${
                    bill.status === "Paid" ? "bg-success" : "bg-warning"
                  }`}
                >
                  {bill.status}
                </span>
              </td>

              <td>
                <Link
                  className="btn btn-warning btn-sm me-2"
                  to={`/billing/edit/${bill.id}`}
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeBill(bill.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default BillingList;

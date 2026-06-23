import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

import {
  createBill,
  updateBill,
  getBillById,
} from "../../services/billingService";

function BillingForm() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [bill, setBill] = useState({
    patientName: "",
    amount: "",
    paymentMode: "Cash",
    status: "Paid",
  });

  useEffect(() => {
    if (id) {
      loadBill();
    }
  }, []);

  const loadBill = async () => {
    const response = await getBillById(id);

    setBill(response.data);
  };

  const handleChange = (e) => {
    setBill({
      ...bill,
      [e.target.name]: e.target.value,
    });
  };

  const saveBill = async (e) => {
    e.preventDefault();

    if (id) {
      await updateBill(id, bill);
    } else {
      await createBill(bill);
    }

    navigate("/billing");
  };

  return (
    <Layout>
      <div className="card shadow">
        <div className="card-body">
          <h3>{id ? "Edit Bill" : "Create Bill"}</h3>

          <form onSubmit={saveBill}>
            <input
              type="text"
              name="patientName"
              className="form-control mb-3"
              placeholder="Patient Name"
              value={bill.patientName}
              onChange={handleChange}
            />

            <input
              type="number"
              name="amount"
              className="form-control mb-3"
              placeholder="Amount"
              value={bill.amount}
              onChange={handleChange}
            />

            <select
              name="paymentMode"
              className="form-select mb-3"
              value={bill.paymentMode}
              onChange={handleChange}
            >
              <option>Cash</option>
              <option>UPI</option>
              <option>Card</option>
            </select>

            <select
              name="status"
              className="form-select mb-3"
              value={bill.status}
              onChange={handleChange}
            >
              <option>Paid</option>
              <option>Pending</option>
            </select>

            <button type="submit" className="btn btn-success">
              Save Bill
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default BillingForm;

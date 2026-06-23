import axios from "axios";

const API_URL = "http://localhost:5000/billings";

export const getAllBills = () => axios.get(API_URL);

export const getBillById = (id) => axios.get(`${API_URL}/${id}`);

export const createBill = (bill) => axios.post(API_URL, bill);

export const updateBill = (id, bill) => axios.put(`${API_URL}/${id}`, bill);

export const deleteBill = (id) => axios.delete(`${API_URL}/${id}`);

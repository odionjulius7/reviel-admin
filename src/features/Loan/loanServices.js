import axios from 'axios';
// import { config } from "../../utils/axiosconfig";
import { base_url } from '../../utils/baseUrl';
import { generateAxiosConfig } from '../../utils/axiosconfig';

const allLoanRecords = async (token) => {
  const config = generateAxiosConfig(token);
  // const response = await axios.get(`${base_url}loan/admin?deleted=false`, config);
  const response = await axios.get(`${base_url}loan/all`, config);
  return response.data?.data;
};
const allUsersRecordedLoans = async (token) => {
  const config = generateAxiosConfig(token);
  // const response = await axios.get(`${base_url}loan/admin?deleted=false`, config);
  const response = await axios.get(`${base_url}record/all`, config);
  return response.data?.data;
};

const getApprovedloans = async (items) => {
  const config = generateAxiosConfig(items.token);
  const response = await axios.get(
    `${base_url}loan/admin?status=${items.item}&deleted=false`,
    config
  );
  // console.log(response);
  return response.data?.data;
};

const getAloan = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}loan/admin/${ids.id}`, config);
  // console.log(response);
  return response.data?.data;
};
//
const getAUserloans = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(
    `${base_url}loan/admin?status=false&deleted=false&userId=${ids.id}`,
    config
  );
  return response?.data?.data;
};
//
const getAUserloansMetrics = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}loan/user/metrics?id=${ids.id}`, config);
  return response?.data?.data;
};

//
const deleteloan = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.delete(`${base_url}loan/${ids.id}/admin`, config);
  return response.data;
};

// Get Graph metrics
const getMonthlyloan = async (token) => {
  const config = generateAxiosConfig(token);
  const response = await axios.get(`${base_url}loan/line-chart`, config);

  return response.data?.data;
};
// Loan metrics
const loanMetrics = async (token) => {
  const config = generateAxiosConfig(token);
  const response = await axios.get(`${base_url}loan/metrics`, config);

  return response.data?.data;
};
//
// Loan transaction Table
const loanTransaction = async (token) => {
  const config = generateAxiosConfig(token);
  const response = await axios.get(`${base_url}payment/admin`, config);

  return response.data?.data;
};
//
// Search Loans
const searchLoansByName = async (nums) => {
  const config = generateAxiosConfig(nums.token);
  const response = await axios.get(`${base_url}loan/all?credit_id=${nums.creditid}`, config);
  // console.log(config);
  return response.data?.data;
};

// const getLoanStatus = async (items) => {
//   const config = generateAxiosConfig(items.token);
//   let status = items.item;

//   // Add logic to adjust the status based on certain conditions
//   if (status === 'active') {
//     status = false;
//   } else if (status === 'completed') {
//     status = true;
//   }

//   const response = await axios.get(`${base_url}loan/all?status=${status}`, config);
//   const loanData = response.data?.data;

//   return loanData;
// };

const getLoanStatus = async (items) => {
  const config = generateAxiosConfig(items.token);
  const response = await axios.get(`${base_url}loan/all?status=${items.item}`, config);
  // console.log(response);
  return response.data?.data;
};

const loanService = {
  getLoanStatus,
  loanTransaction,
  getAloan,
  allLoanRecords,
  getApprovedloans,
  deleteloan,
  getAUserloans,
  getMonthlyloan,
  loanMetrics,
  allUsersRecordedLoans,
  getAUserloansMetrics,
  searchLoansByName,
};

export default loanService;

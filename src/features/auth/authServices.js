import axios from 'axios'; // Import the generateAxiosConfig function
import { base_url } from '../../utils/baseUrl';
import { generateAxiosConfig } from '../../utils/axiosconfig';
// import { config } from "utils/axiosconfig";

const login = async (user) => {
  const response = await axios.post(`${base_url}user/adminLogin`, user);
  if (response.data) {
    localStorage.setItem('reviel', JSON.stringify(response.data));
  }

  return response.data;
};

const changePassword = async (user) => {
  const { token, new_password, old_password } = user;
  const config = generateAxiosConfig(token);
  const response = await axios.post(
    `${base_url}user/password`,
    { old_password, new_password },
    config
  );

  return response.data;
};
const forgotPassword = async (user) => {
  const { token, email } = user;
  // const config = generateAxiosConfig(token);
  const response = await axios.post(`${base_url}user/forgot`, { email });

  return response.data;
};
//
const recoverPassword = async (user) => {
  const response = await axios.post(`${base_url}user/reset`, user);
  console.log(response);
  return response.data;
};

const getUsers = async (token) => {
  const config = generateAxiosConfig(token);
  const response = await axios.get(`${base_url}user/all`, config);
  console.log(config);
  return response.data;
};

const authService = {
  forgotPassword,
  recoverPassword,
  login,
  getUsers,
  changePassword,
};

export default authService;

// import axios from "axios";
// import { config } from "../../utils/axiosconfig";
// import { base_url } from "../../utils/baseUrl";

// const login = async (user) => {
//   const response = await axios.post(`${base_url}user/adminLogin`, user);
//   if (response.data) {
//     localStorage.setItem("grip", JSON.stringify(response.data));
//   }

//   const getUserfromLocalStorage = localStorage.getItem("grip")
//     ? JSON.parse(localStorage.getItem("grip"))
//     : null;

//   return response.data;
// };

// const getUsers = async () => {
//   const response = await axios.get(`${base_url}user/all`, config);

//   return response.data;
// };

// const authService = {
//   login,
//   getUsers,
// };

// export default authService;

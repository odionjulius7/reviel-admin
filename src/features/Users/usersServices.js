import axios from 'axios';
// import { config } from "../../utils/axiosconfig";

import { base_url } from '../../utils/baseUrl';

import { generateAxiosConfig } from '../../utils/axiosconfig';

const getUsers = async (token) => {
  const config = generateAxiosConfig(token);
  const response = await axios.get(`${base_url}user/all`, config);
  // console.log(config);
  return response.data;
};
// Search Users
const searchUserByName = async (nums) => {
  const config = generateAxiosConfig(nums.token);
  const response = await axios.get(
    `${base_url}user/all?username=${nums.username}&role=user`,
    config
  );
  // console.log(config);
  return response.data;
};

const getAUser = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}user/${ids.id}`, config);

  return response.data?.data;
};

const suspendAUser = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  try {
    const response = await axios.patch(`${base_url}user/suspend/${ids.id}`, null, config);
    return response.data?.data;
  } catch (error) {
    console.log(error);
    // Handle the error as needed
    return null;
  }
};
const UnsuspendAUser = async (ids) => {
  const config = generateAxiosConfig(ids.token);
  try {
    const response = await axios.patch(`${base_url}user/unsuspend/${ids.id}`, null, config);
    return response.data?.data;
  } catch (error) {
    console.log(error);
    // Handle the error as needed
    return null;
  }
};

const getUserMetrics = async (token) => {
  const config = generateAxiosConfig(token);
  const response = await axios.get(`${base_url}user/pie`, config);
  console.log(response.data?.data);
  return response.data?.data;
};

const usersService = {
  getUsers,
  getAUser,
  getUserMetrics,
  suspendAUser,
  UnsuspendAUser,
  searchUserByName,
};

export default usersService;

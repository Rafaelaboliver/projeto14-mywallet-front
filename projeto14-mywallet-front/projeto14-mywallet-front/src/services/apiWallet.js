import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getWallet(token) {
  return axios.get(`${BASE_URL}/wallet`, createConfig(token));
}

export const apiWallet = {
  getWallet
};
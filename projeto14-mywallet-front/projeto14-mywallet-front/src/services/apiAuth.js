import axios from "axios";


const BASE_URL = "http://localhost:5000";

function singUp(body) {
  return axios.post(`${BASE_URL}/singUp`, body);
}

function singIn(body) {
    return axios.post(`${BASE_URL}/singIn`, body);
  
  }

  const apiAuth = {
    singUp, 
    singIn
  };
export default apiAuth;


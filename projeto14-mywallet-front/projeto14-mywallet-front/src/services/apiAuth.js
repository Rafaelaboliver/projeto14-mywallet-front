import axios from "axios";


const BASE_URL = "http://localhost:5000";

function singUp(body) {
  return axios.post(`${BASE_URL}/singUp`, body);
}

function singIn(body) {
    return axios.post(`${BASE_URL}/singIn`, body);
  
  }

  function singOut(token) {
    return axios.post(`${BASE_URL}/singOut`, { token });
  }

  const apiAuth = {
    singUp, 
    singIn,
    singOut
  };
export default apiAuth;


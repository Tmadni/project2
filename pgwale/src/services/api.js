import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
// --------token based------
// let Api = function () {
//   let token = sessionStorage.getItem("token");
//   if (token) {
//     apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   }
//   return apiClient;
// };

// export default Api;
export default apiClient;

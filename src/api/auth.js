const auth = {
  setToken(token) {
    return localStorage.setItem("token", token);
  },
  getToken() {
    return localStorage.getItem("token");
  },
  clearAll() {
    return localStorage.clear();
  },
};
export default auth;

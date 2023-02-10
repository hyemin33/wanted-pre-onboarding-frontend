const auth = {
  setToken(token) {
    return localStorage.setItem("token", token);
  },
  getToken() {
    return localStorage.getItem("token");
  },

};
export default auth;

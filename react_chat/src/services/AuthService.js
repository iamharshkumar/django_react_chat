import axios from "axios";

class AuthService {
  setUserInLocalStorage(data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  async login(username, password) {
    const response = await axios.post("http://127.0.0.1:8000/auth-token/", { username, password });
    if (!response.data.token) {
      return response.data;
    }
    this.setUserInLocalStorage(response.data);
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  }
}

export default new AuthService();
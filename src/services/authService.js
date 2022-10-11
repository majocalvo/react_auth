import RestAPI from "./restAPI";

export default class AuthService extends RestAPI {

  async login(payload) {
    const data = await this.post("/auth/login", payload, false);
    localStorage.setItem("token", data.token);
  }

  async check() {
    return await this.get("/auth/check");
  }
} 
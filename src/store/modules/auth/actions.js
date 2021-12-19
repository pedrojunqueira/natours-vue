import axios from "axios";

export default {
  async login(context, payload) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const params = new URLSearchParams();
    params.append("username", payload.username);
    params.append("password", payload.password);
    const response = await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/v1/users/token",
      data: params,
      config,
    });
    const user = {
      username: response.data.username,
      token: response.data.token,
    };
    context.commit("setUser", user);
  },
};

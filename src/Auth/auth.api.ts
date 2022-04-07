import axios, { Axios, AxiosRequestConfig } from "axios";

export interface Credentials {
  email: string;
  password: string;
  name?: any | "";
}

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: process.env.REACT_APP_API_BASE_URL + "/authaccount/login",
    data,
  };
  try {
    const res = await axios.request(requestConfig);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data.data));
    }
  } catch (e) {
    if (e instanceof Error) {
      return { error: e.message };
    }
  }
};

export const onRegister = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: process.env.REACT_APP_API_BASE_URL + "/authaccount/registration",
    data,
  };
  try {
    const { data: response } = await axios.request(requestConfig);
  } catch (e) {
    if (e instanceof Error) {
      return { error: e.message };
    }
  }
};

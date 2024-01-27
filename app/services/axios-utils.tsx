import axios from "axios";
import { store } from "../redux/store";
import { serviceCall, getServiceCall } from "../redux/slices/app-slice";

axios.defaults.baseURL = process.env.EXPO_PUBLIC_REACT_NATIVE_SERVER_URI;

axios.interceptors.request.use(
  function (config) {
    if (config.method === "get") {
      store.dispatch(getServiceCall(true));
    }
    store.dispatch(serviceCall(true));
    return config;
  },
  function (error) {
    console.log("🚀 ~ file: axios-utils.jsx:21 ~ error:", error);
    store.dispatch(serviceCall(false));
    store.dispatch(getServiceCall(false));
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const initialLoading = store.getState().app.is_initial_loading;
    if (initialLoading) {
      store.dispatch(getServiceCall(false));
    }
    store.dispatch(serviceCall(false));
    return response;
  },
  (error) => {
    console.log("🚀 ~ file: axios-utils.jsx:36 ~ error:", error);
    store.dispatch(serviceCall(false));
    store.dispatch(getServiceCall(false));
    return Promise.reject(error?.response);
  }
);

export default axios;

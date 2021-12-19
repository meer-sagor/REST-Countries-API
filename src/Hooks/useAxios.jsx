import axios from "axios";
import { useEffect, useReducer } from "react";
import { Actions } from "./Actions";

axios.defaults.baseURL = "https://restcountries.com/v3.1";
// https://restcountries.com/v3.1/all

const initialState = {
  loading: true,
  data: null,
  error: null,
};

const axiosReducer = (state, action) => {
  switch (action.type) {
    case Actions.API_REQUEST:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case Actions.API_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const useAxios = (axiosParams) => {
  const [state, dispatch] = useReducer(axiosReducer, initialState);

  const axiosRequest = async (params) => {
    try {
      const { data } = await axios.request(params);
      dispatch({ type: Actions.API_REQUEST, data: data });
    } catch (e) {
      dispatch({ type: Actions.API_REQUEST_FAILED, error: e.message });
    }
  };

  useEffect(() => {
    axiosRequest(axiosParams);
  }, []);

  return state;
};

export default useAxios;

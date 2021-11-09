import {
  SET_CLIENTS,
  SET_CLIENTS_LOG,
  SET_CLIENT_CREATE_RESPONSE,
} from "../actions/actions";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  responseMessage: null,
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENTS:
      return { ...state, data: action.payload, isLoading: true };

    case SET_CLIENTS_LOG:
      return { ...state, error: action.payload };

    case SET_CLIENT_CREATE_RESPONSE:
      return { ...state, responseMessage: action.payload };

    default:
      return state;
  }
};

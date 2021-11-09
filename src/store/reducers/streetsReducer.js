import { SET_STREETS_LOG, SET_STREETS } from "../actions/actions";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const streetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STREETS:
      return { ...state, data: action.payload, isLoading: true };

    case SET_STREETS_LOG:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

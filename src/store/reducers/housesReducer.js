import { SET_HOUSES, SET_HOUSES_LOG } from "../actions/actions";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOUSES:
      return { ...state, data: action.payload, isLoading: true };

    case SET_HOUSES_LOG:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

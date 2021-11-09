import { SET_FLATS, SET_FLATS_LOG } from "../actions/actions";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const flatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLATS:
      return { ...state, data: action.payload, isLoading: true };

    case SET_FLATS_LOG:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

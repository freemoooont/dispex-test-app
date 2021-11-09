import { SET_FLATS, SET_FLATS_LOG, FETCH_FLATS } from "./actions";

const setFlats = (payload) => ({
  type: SET_FLATS,
  payload,
});

const setLog = (payload) => ({
  type: SET_FLATS_LOG,
  payload,
});

export const FlatsActionCreators = {
  fetchFlats: (houseId) => async (dispatch, tmp, services) => {
    try {
      dispatch({ type: FETCH_FLATS });
      const { data } = await services.flatsApi.fetchFlats(houseId);
      dispatch(setFlats(data));
    } catch (e) {
      dispatch(setLog(e.message));
    }
  },
};

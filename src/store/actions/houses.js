import { FETCH_HOUSES, SET_HOUSES_LOG, SET_HOUSES } from "./actions";

const setHouses = (payload) => ({
  type: SET_HOUSES,
  payload,
});

const setLog = (payload) => ({
  type: SET_HOUSES_LOG,
  payload,
});

export const HousesActionCreators = {
  FetchHouses: (streetId) => async (dispatch, tmp, services) => {
    try {
      dispatch({ type: FETCH_HOUSES });
      const { data } = await services.housesApi.fetchHouses(streetId);
      dispatch(setHouses(data));
    } catch (e) {
      dispatch(setLog(e.message));
    }
  },
};

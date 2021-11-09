import { FETCH_STREETS, SET_STREETS_LOG, SET_STREETS } from "./actions";
import _ from "lodash";

const setStreets = (payload) => ({
  type: SET_STREETS,
  payload,
});

const setLog = (payload) => ({
  type: SET_STREETS_LOG,
  payload,
});

export const StreetsActionCreators = {
  FetchStreets: () => async (dispatch, tmp, services) => {
    try {
      dispatch({ type: FETCH_STREETS });
      const response = await services.streetsApi.fetchStreets(true);
      const data = _.map(
        response.data,
        _.partialRight(_.pick, ["id", "prefix", "name"])
      );
      dispatch(setStreets(data));
    } catch (e) {
      dispatch(setLog(e.message));
    }
  },
};

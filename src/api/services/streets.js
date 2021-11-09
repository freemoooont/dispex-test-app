import { api } from "../http-common";
import { StreetsRoutes } from "./apiRoutes";

export const streetsApi = {
  async fetchStreets(tumenFlag) {
    return await api.get(
      tumenFlag ? StreetsRoutes.STREETS_CITY_ID_1 : StreetsRoutes.ALL_STREETS
    );
  },
};

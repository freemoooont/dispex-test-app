import { api } from "../http-common";
import { HousesRoutes } from "./apiRoutes";

export const housesApi = {
  async fetchHouses(streetId) {
    return await api.get(`${HousesRoutes.HOUSES}/${streetId}`);
  },
};

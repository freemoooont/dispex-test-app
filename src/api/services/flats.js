import { api } from "../http-common";
import { FlatsRoutes } from "./apiRoutes";

export const flatsApi = {
  async fetchFlats(houseId) {
    return await api.get(`${FlatsRoutes.FLATS}/${houseId}`);
  },
};

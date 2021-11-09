import { api } from "../http-common";
import { ClientsRoutes } from "./apiRoutes";

export const clientsApi = {
  async fetchClients(addressId) {
    return await api.get(`${ClientsRoutes.CLIENTS}?addressId=${addressId}`);
  },

  async createClient(data) {
    return await api.post(ClientsRoutes.CLIENTS, data);
  },

  async updateClient(data) {
    return await api.put(ClientsRoutes.BIND_CLIENT, data);
  },

  async deleteClient(bindId) {
    return await api.delete(`${ClientsRoutes.BIND_CLIENT}/${bindId}`);
  },
};

import {
  SET_CLIENTS,
  SET_CLIENTS_LOG,
  FETCH_CLIENTS,
  SET_CLIENTS_LOADED_FALSE,
  SET_CREATE_CLIENTS,
  SET_CLIENT_CREATE_RESPONSE,
  SET_CLIENT_UPDATE_RESPONSE,
  SET_CLIENT_DELETE_RESPONSE,
} from "./actions";

const setClients = (payload) => ({
  type: SET_CLIENTS,
  payload,
});

const setLog = (payload) => ({
  type: SET_CLIENTS_LOG,
  payload,
});

const setResponse = (payload) => ({
  type: SET_CLIENT_CREATE_RESPONSE,
  payload,
});

export const ClientsActionCreators = {
  fetchClients: (addressId) => async (dispatch, _, services) => {
    try {
      dispatch({ type: SET_CLIENTS_LOADED_FALSE });
      dispatch({ type: FETCH_CLIENTS });
      const { data } = await services.clientsApi.fetchClients(addressId);
      dispatch(setClients(data === "" ? [] : data));
    } catch (e) {
      dispatch(setLog(e.message));
    }
  },

  // fetchAllClientsInHouse: (addressId) => async (dispatch, _, services) => {
  //   try {
  //     dispatch({ type: SET_CLIENTS_LOADED_FALSE });
  //     dispatch({ type: FETCH_CLIENTS });
  //     const { data } = await services.clientsApi.fetchClients(addressId);
  //     dispatch(setClients(data === "" ? [] : data));
  //   } catch (e) {
  //     dispatch(setLog(e.message));
  //   }
  // },

  createClient: (data) => async (dispatch, _, services) => {
    try {
      dispatch({ type: SET_CREATE_CLIENTS });
      const clientDto = {
        Name: data.name,
        Email: data.eMail,
        Phone: data.phone,
        BindId: data.bindId,
      };
      const response = await services.clientsApi.createClient(clientDto);
      dispatch(setResponse(response.data));
    } catch (e) {
      dispatch(setResponse(e.message));
    }
  },

  updateClient: (data) => async (dispatch, _, services) => {
    try {
      dispatch({ type: SET_CLIENT_UPDATE_RESPONSE });
      const clientDto = {
        Name: data.name,
        Email: data.eMail,
        Phone: data.phone,
        AddressId: data.bindId,
        ClientId: data.id,
      };
      const response = await services.clientsApi.updateClient(clientDto);
      dispatch(setResponse(response.data));
    } catch (e) {
      dispatch(setResponse(e.message));
    }
  },

  deleteClient: (id) => async (dispatch, _, services) => {
    try {
      dispatch({ type: SET_CLIENT_DELETE_RESPONSE });
      const response = await services.clientsApi.deleteClient(id);
      dispatch(setResponse(response.data));
    } catch (e) {
      dispatch(setResponse(e.message));
    }
  },
};

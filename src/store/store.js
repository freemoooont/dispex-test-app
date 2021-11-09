import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { streetsReducer } from "./reducers/streetsReducer";
import { housesReducer } from "./reducers/housesReducer";
import { flatsReducer } from "./reducers/flatsReducer";
import { clientsReducer } from "./reducers/clientsReducer";

import { streetsApi } from "../api/services/streets";
import { housesApi } from "../api/services/houses";
import { flatsApi } from "../api/services/flats";
import { clientsApi } from "../api/services/clients";

import { StreetsActionCreators } from "./actions/streets";
import { HousesActionCreators } from "./actions/houses";
import { FlatsActionCreators } from "./actions/flats";
import { ClientsActionCreators } from "./actions/clients";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  streets: streetsReducer,
  houses: housesReducer,
  flats: flatsReducer,
  clients: clientsReducer,
});

export const ActionCreators = {
  ...StreetsActionCreators,
  ...HousesActionCreators,
  ...FlatsActionCreators,
  ...ClientsActionCreators,
};

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        streetsApi,
        housesApi,
        flatsApi,
        clientsApi,
      })
    )
  )
);

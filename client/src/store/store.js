import { rootReducer } from "store/rootReducer";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" &&
  // eslint-disable-next-line no-underscore-dangle
  // eslint-disable-next-line no-undef
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // eslint-disable-next-line no-underscore-dangle
      // eslint-disable-next-line no-undef
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

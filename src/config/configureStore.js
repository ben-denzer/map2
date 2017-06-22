import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./rootReducer";

function configureStoreDev(initialState = {}) {
    const store = createStore(rootReducer, initialState, compose(
        // Add other middleware on this line...
        applyMiddleware(thunk, reduxImmutableStateInvariant()),
        // add support for Redux dev tools
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ));

    //   if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept("../reducers", () => {
    //       // eslint-disable-line global-require
    //       const nextReducer = require("../reducers").default;
    //       store.replaceReducer(nextReducer);
    //     });
    //   }

    return store;
}

function configureStore(initialState = {}) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export default process.env.NODE_ENV === "production" ? configureStore : configureStoreDev;

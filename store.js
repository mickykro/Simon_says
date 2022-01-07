import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PlayReducer from "./reducers/index";
const rootReducer = combineReducers({
    main: PlayReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));

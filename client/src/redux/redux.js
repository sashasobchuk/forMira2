import {applyMiddleware, combineReducers, createStore} from "redux";
import colectionsReducer from "./colectionsReducer";
import createSagaMiddleware from "redux-saga"
import {allWatchers} from "./sagas/allSagas";
import {composeWithDevTools} from "redux-devtools-extension";
import bookReducer from "./booksReducer";
export const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    collectionsPage:colectionsReducer,
    booksPage:bookReducer,
})


export const store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(allWatchers)

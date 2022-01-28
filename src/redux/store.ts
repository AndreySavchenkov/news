import {combineReducers, createStore} from "redux";
import {LoginReducer} from "./login-reducer";
import {PostReducer} from "./post-reducer";

export const rootReducer = combineReducers({
    login: LoginReducer,
    post: PostReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;
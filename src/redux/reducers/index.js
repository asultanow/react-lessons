import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {someReducer} from "./someReducer";

export const rootReducer = combineReducers({userReducer, someReducer});

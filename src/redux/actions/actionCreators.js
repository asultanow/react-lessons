import {USERS_LOADED, USER_ADDED, USER_PROP_CHANGED} from "./actionTypes";

const usersLoaded = users => ({type: USERS_LOADED, payload: users});

const userAdded = user => ({type: USER_ADDED, payload: user});

const userPropChanged = prop => ({type: USER_PROP_CHANGED, payload: prop});

export {usersLoaded, userAdded, userPropChanged};

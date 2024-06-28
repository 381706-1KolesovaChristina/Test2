import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import diaologsReduser from "./dialogs-reducer";
import sidebarsReduser from "./sidebar-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: diaologsReduser,
    sidebar: sidebarsReduser
});

let store = configureStore({ reducer: redusers });

export default store;
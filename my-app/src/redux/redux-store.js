import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import diaologsReduser from "./dialogs-reducer";
import sidebarsReduser from "./sidebar-reducer";

let redusers = combineReducers({ //функцией combineReducers задаем объект, хранящий "скомбиненые" редюсеры.
    // этот объект будет выступать как наш store, т.к. он задает по сути все нужные сво-ва редюсерами
    profilePage: profileReducer, //profilePage - имя св-ва, profileReducer - его значение, те наш редюсер. можно без имени св-ва
    dialogsPage: diaologsReduser,//diaologsReduser
    sidebar: sidebarsReduser//sidebarsReduser
});

let store = configureStore({ reducer: redusers });

export default store;
"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./Features/CounterSlice";


const rootReducer = combineReducers({
  counter: counterReducer,  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });
 export type AppStore = typeof store

 export type RootState = ReturnType<AppStore['getState']>
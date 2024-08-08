import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cardsSlice } from "./cardsSlice";

const rootReducer = combineReducers({
    cards: cardsSlice.reducer
}); 

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];

import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
});

//RootState - тип который знает о reducers с которыми мы работаем
export type RootState = ReturnType<typeof store.getState>;

//AppDispatch - тип который знает о actions нашего приложения
export type AppDispatch = typeof store.dispatch;

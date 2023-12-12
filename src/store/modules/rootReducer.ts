import { combineReducers } from "@reduxjs/toolkit";
import personagensSlice from "./personagens/personagensSlice";

const rootReducer = combineReducers({
  personagens: personagensSlice
});

export default rootReducer;

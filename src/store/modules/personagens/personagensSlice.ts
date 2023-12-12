import { createSlice } from "@reduxjs/toolkit";
import listarPersonagens from "./actions";


interface Personagem {
  id: string;
  name: string;
  gender: string;
  species: string;
  image: string;
}

const initialState: Personagem[] = [] 

export const personagensSlice = createSlice({
  name: "personagens",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(listarPersonagens.pending,()=>{
        console.log("Buscando personagem...")
    })
    builder.addCase(listarPersonagens.fulfilled,(state,action)=>{
        console.log("Listado com sucesso.")
        state = action.payload
        return state
    })
  }
});

export default personagensSlice.reducer;

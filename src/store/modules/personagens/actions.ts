import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API
});

const listarPersonagens = createAsyncThunk("personagens/listarPersonagens",async()=>{
    try {
        const resposta = await api.get("/characters")
        return resposta.data
    } catch (error) {
        console.log(error)
        return []
    }
})

export default listarPersonagens

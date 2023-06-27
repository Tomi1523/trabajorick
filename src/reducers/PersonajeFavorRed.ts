import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Personaje from "../personaje/personaje";



export interface PersonajesFavoritoState {
  favoritos: Personaje[];
}

const initialState: PersonajesFavoritoState = {
  favoritos: []
};





const personajesFavoritoSlice = createSlice({
  name: "favoritos",
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Personaje>) => {
      const find = state.favoritos.find((fav) => fav.id === action.payload.id);
      console.log(action)
      if (find)
        state.favoritos = state.favoritos.filter(
          (fav) => fav.id !== action.payload.id
        );
      else state.favoritos.push(action.payload);
    },
    
  }

  
});

export const { toggleFavorito} = personajesFavoritoSlice.actions;

export default personajesFavoritoSlice.reducer;

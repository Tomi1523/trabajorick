import { createSlice } from "@reduxjs/toolkit";


interface FiltrosState {
  filtro: string;
}



const initialState = {
  filtro: '',
}

console.log(initialState)

const filtrosSlice = createSlice({
  name: "filtros",
  initialState,
  reducers: {
    limpiarFiltros: (state, action) => {
      state.filtro =  action.payload;
      console.log(action)
    },
  },
});

export const { limpiarFiltros } = filtrosSlice.actions;

export default filtrosSlice.reducer;



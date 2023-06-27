import { configureStore} from "@reduxjs/toolkit";
import PersonajesRed from "../reducers/PersonajesRed";
import PersonajeFavorRed from "../reducers/PersonajeFavorRed";

import LimpiarFIltros from "../reducers/LimpiarFIltros";

const store = configureStore({
    reducer: {
        personajes: PersonajesRed,
        favoritos: PersonajeFavorRed,
        filtros: LimpiarFIltros,
      }
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
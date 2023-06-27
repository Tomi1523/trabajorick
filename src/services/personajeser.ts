import characterinfo from "../personaje/characterInfo";
import info from "../personaje/info";
import Personaje from "../personaje/personaje";

  


  export const buscarPersonajesAPI = async (
    nombre?: string
  ): Promise<Personaje[]> => {
    let params = "?";
    if (nombre) {
      params += `name=${nombre}`;
    }
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
      .then((data) => data.json())
      .then((data) => data.results);
  };
  

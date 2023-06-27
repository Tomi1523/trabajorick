import { useDispatch } from "react-redux";
import { fetchCharactersThunk } from "../../reducers/PersonajesRed";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
const TarjetaPersonaje = () => {
  const dispatch = useDispatch();

  const { characters, status } = useSelector((state) => state.personajes);

  useEffect(() => {
    dispatch(fetchCharactersThunk(""));
  }, [dispatch]);

  if (status === "LOADING") return <div>Cargando personajes...</div>;
  if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!characters || characters.length === 0) return <></>;

  return (
    <>
      <div className="contenedor-tarjetas">
        {characters.map((character, j) => {
          return (
            <div className="tarjetas" key={j}>
              <img src={character.image} alt={character.name} />
              <div className="nombres">
                
                <p>{character.name}</p>
                <BotonFavorito />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TarjetaPersonaje;

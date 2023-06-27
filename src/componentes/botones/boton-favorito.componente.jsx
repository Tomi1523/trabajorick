import { useState } from 'react';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */


const BotonFavorito = ({ esFavorito, onClick }) => {
  const [favorito, setFavorito] = useState(esFavorito);
  const src = favorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  const handleClick = () => {
    setFavorito(!favorito); // Invierte el valor de favorito al hacer clic
    onClick(!favorito); // Pasa el nuevo valor de favorito al controlador de eventos externo
  };

  return (
    <div className="boton-favorito" onClick={handleClick}>
      <img src={src} alt="favorito" />
    </div>
  );
};

export default BotonFavorito;

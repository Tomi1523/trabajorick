import { useDispatch } from 'react-redux';
import './filtros.css';
import { fetchCharactersThunk } from '../../reducers/PersonajesRed';


const Filtros = () => {

    const dispatch = useDispatch();




    const onChange = async (e) => {
        const query = e.target.value;
        dispatch(fetchCharactersThunk(query));
      };

    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input onChange={onChange} type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;
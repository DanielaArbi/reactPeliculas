
import peliculas from '../peliculas.json';
import { PeliculasCard } from '../PeliculasCard';
import '../PeliculasGrid/PeliculasGrid.css'

export const PeliculasGrid = () => {



    return (
        <>
        <ul className='moviesGrid d-flex flex-wrap justify-content-center'>
         { peliculas.map(pelicula=>(
            <PeliculasCard key={pelicula.id} pelicula = {pelicula}/>
          )
          )}

        </ul>
        </>
    );
}
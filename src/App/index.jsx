import {PeliculasGrid} from '../PeliculasGrid'
import './App.css';
//import MostrarBlogs from '../blog/MostrarBlogs.jsx';

function App() {
  return (
    <div className="App">
     {/*  <MostrarBlogs /> */}
     <div className='container-flex'>
     <header className='title fs-1 text-center text-warning'>Peliculas</header>
     <main>
      <PeliculasGrid />
     </main>
     </div>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar'
import ListMovie from './components/ListMovie';
import NewMovie from './components/NewMovie';
import {useState,useEffect} from 'react'


function App() {

const [movies, setMovies] = useState([])
const [category, setCategory] = useState([])
const [newMovie, setNewMovie] = useState({
  titulo:"",
  descripcion:"",
  duracion:"",
  trailer:"",
  fecha_estreno:"",
  category_id:"",

})

useEffect(()=>{
    fetch('/api/movie/list')
    .then(response => response.json())
    .then( movie => setMovies(movie.data))
    .catch(e => console.error(e))
    
},[]);

useEffect(()=>{
  fetch('/api/movie/list/category')
  .then(response => response.json())
  .then( category => setCategory(category.data))
  .catch(e => console.error(e))
  
},[]);
  
console.log(movies)
  return (
    <React.Fragment>
        <Navbar/>
       <main className='container'>
            <section className='row'>
              <article className='col-7'>
                <h2>Listado de Peliculas</h2>
                <ListMovie movies = {movies} />
              </article>
               <article className='col-7'>
                <h2>Agregar Nueva Pelicula</h2>
                  <NewMovie category={category} newMovie ={newMovie} setNewMovie ={ setNewMovie} />
             
              </article>
            </section>
            
       </main>
    </React.Fragment>
  );
}

export default App;

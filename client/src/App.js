import React from 'react';
import Navbar from './components/Navbar'
import ListMovie from './components/ListMovie';
import NewMovie from './components/NewMovie';
import {useState,useEffect} from 'react'


function App() {

const [movies, setMovies] = useState([])

useEffect(() => {
    fetch('http://www.omdbapi.com/?s=avatar&apikey=7455e6eb')
    .then(response => response.json())
    .then (data =>
        
      {
        setMovies(data.Search)
        console.log(data.Search)
        console.log(data.Search[0])
        console.log(data.Search[0].Title)
      } 
        
        
    )
    .catch( error => console.log(error))
    
  },[])

  /* for newMovie */
const [newMovie, setNewMovie] = useState({
  title:"",
  description:"",
  duration:0
})

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
                <NewMovie newMovie={newMovie} setNewMovie={setNewMovie} />
              </article>
            </section>
       </main>
    </React.Fragment>
  );
}

export default App;

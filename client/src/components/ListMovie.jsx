import React from "react";

function ListMovie({ movies, setListUpdate }) {
  console.log(movies);
  console.log(movies[0]);

const handleDelete = (id) => {
  const requestInit = {
    method : 'DELETE',
    
  }
  fetch('/api/movie/'+ id, requestInit)
  .then(response => response.json())
  .then( date => console.log(date))

  setListUpdate(true)
}

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map((movie,i)=> {
              return  <tr key= {i}>
                      <td>{movie.id}</td>
                      <td>{movie.titulo}</td>
                      <td>{movie.descripcion}</td>
                      <td>{movie.duracion}</td>
                      <td>
                        <div className="mb-3">
                          <button className=" btn btn-success" >Editar</button>
                        </div>
                      </td>
                      <td>
                        <div className="mb-3">
                          <button onClick={()=>handleDelete(movie.id)} className="btn btn-danger">Delete</button>
                        </div>
                      </td>
                      </tr>
            })
          }
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ListMovie;

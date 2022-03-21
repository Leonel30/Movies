import React from "react";

function ListMovie({ movies }) {
  console.log(movies);
  console.log(movies[0]);
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>Description</th>
            <th>Duration</th>
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
                      </tr>
            })
          }

          

         
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ListMovie;

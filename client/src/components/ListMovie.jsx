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
          <tr>
            <td>{movies.Title}</td>
            <td>{movies.Title}</td>
            <td>{movies.description}</td>
            <td>{movies.length}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ListMovie;

import React from 'react';

function NewMovie({newMovie,setNewMovie,category}) {

const handleChange = (e) =>{
  setNewMovie({...newMovie,
    [e.target.name] : e.target.value
    
  })

}
 
let {titulo, descripcion, duracion,trailer,fecha_estreno,category_id} = newMovie


const handleSubmit = (e) => {
  e.preventDefault();


  duracion = parseInt(duracion,10)
  //validacion de campos //
  if(titulo === ""  || descripcion === ""  || duracion <= 0 || trailer ===""  || fecha_estreno === "" || category_id <= 0){
    alert('todos los campos son obligatorios')
    return
  } 
  const requestInit = {
    method : 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(newMovie)
  }
  fetch('/api/movie', requestInit)
  .then(response => response.json())
  .then( date => console.log(date))
 
  // reinicinaod form //
  setNewMovie({
    titulo:"",
    descripcion:"",
    duracion:"",
    trailer:"",
    fecha_estreno:"",
    category_id:""
  })
   


}
 
  return (
    <React.Fragment>

      <form onSubmit={handleSubmit}  >
      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">Titulo</label>
        <input  value= {titulo} onChange={handleChange} name="titulo"  type = "text" id="title"className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Descripcion</label>
        <input onChange={handleChange} name="descripcion"  type = "text" id="title"className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="duration" className="form-label">Duracion</label>
        <input onChange={handleChange} name="duracion" type = "number" id="duration"className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="trailer" className="form-label">Trailer</label>
        <input onChange={handleChange} name="trailer" type = "url" id="trailer"className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="Categoria" className="form-label">Categoria</label>
        <select onChange={handleChange} name="category_id" className = "form-select">
           {category.map((categories,i)=>{
             return <option key={i} value={categories.id}>{categories.name}</option>
           })}
          
        </select>
        
      </div>
      <div className="mb-3">
        <label htmlFor="fecha_estreno" className="form-label">Fecha de Estreno</label>
        <input onChange={handleChange} name="fecha_estreno" type ="date" id="fecha_estreno"className="form-control"></input>
      </div>
      <button className="btn btn-primary">Submit</button>
      </form>
      
      
    </React.Fragment> 
    
    );
}

export default NewMovie;

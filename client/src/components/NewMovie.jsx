import React from 'react';

function NewMovie({newMovie,setNewMovie}) {

const handleChange = (e) =>{
  setNewMovie({...newMovie,
    [e.target.name] : e.target.value
    
  })

}

let {title, description, duration} = newMovie

const handleSubmit = () => {

  duration = parseInt(duration,10)
  //validacion de campos //
  if(title === ""  || description === ""  || duration <= 0 ){
    alert('todos los campos son obligatorios')
    return
  } 
  



}


  return (
    <React.Fragment>

      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <labe htmlFor="title" className="form-label">Titulo</labe>
        <input name="title" onChange={handleChange} type = "text" id="title"className="form-control"></input>
      </div>
      <div className="mb-3">
        <labe htmlFor="description" className="form-label">Description</labe>
        <input name="description" onChange={handleChange} type = "text" id="title"className="form-control"></input>
      </div>
      <div className="mb-3">
        <labe htmlFor="duration" className="form-label">Duration</labe>
        <input name="duration" onChange={handleChange} type = "number" id="duration"className="form-control"></input>
      </div>
      <button className="btn btn-primary">Submit</button>
      </form>
      
      
    </React.Fragment> 
    
    );
}

export default NewMovie;

const db = require('../src/database/models')
const Op = db.Sequelize.Op;

let movieController = {
  list:  (req, res)=> {
      
      db.Movies.findAll({
          association : "categories"
      })
      .then(movies => {
          let respuesta = {
              meta: {
                  status : 200,
                  total: movies.length,
                  url: 'api/movie'
              },
              data:[{
                  total: movies.length,
                  movies:movies
              }]
          }
              res.json(respuesta);
             
          }) 
  },
   show :  (req, res)=> {
      
    db.Movies.findByPk(req.params.id)
    .then(movies => {
        let respuesta = {
            meta: {
                status : 200,
                total: movies.length,
                url: 'api/movie'
            },
            data:[{
                total: movies.length,
                movies:movies
            }]
        }
            res.json(respuesta);
           
        }) 
},
 store :  (req, res)=> {
     
    db.Movies.create(req.body)
    .then(movies => {
        let respuesta = {
            meta: {
                status : 200,
                total: movies.length,
                url: 'api/movie',
                created : "Success"
            },
            data:[{
                total: movies.length,
                movies:movies
            }]
        }
            res.json(respuesta);
           
        }) 
},

 delete:  (req, res)=> {   

    db.Movies.destroy( {
        where : {
            id: req.params.id
        }
    })
    .then( response => {
        return res.json(response)
    })
}, 
 search: (req, res)=>{
    db.Movies.findAll(
        {
            where: {
                titulo: {[Op.like]:'%' + req.query.keyword + '%'}
            }
        }
    )
    .then( movies =>{
        if(movies.length > 0){
            return res.json(movies)

        } else {
            return res.json("Pelicula no encontrada")
        }
    })
 }

 };

module.exports = movieController;

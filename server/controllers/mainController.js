const db = require('../src/database/models')
const { Op } = require('sequelize')
const path = require('path')


let mainController = {
    index : function(req,res) {
        db.Movies.findAll()
        .then( movie => {
            let respuesta = {
                meta : {
                    status: 200,
                    total : movie.length,
                    url : "api/movie"
                },
                data : [{
                    total: movies.length,
                    movies: movies
                }]
            
            }
            res.json(respuesta);
        })
    }
}

module.exports = mainController
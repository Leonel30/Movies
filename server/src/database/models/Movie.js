module.exports = (sequelize, dataTypes) => {
    let alias = 'Movies';
    let cols = {
        id:{
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        titulo : {
            type: dataTypes.STRING
             
        },
        descripcion : {
            type: dataTypes.STRING  
        },
        duracion : {
            type: dataTypes.INTEGER
             
        }, 
        trailer : {
            type: dataTypes.STRING
        },
        fecha_estreno : {
            type: dataTypes.STRING
             
        },
        category_id : {
            type: dataTypes.INTEGER
             
        }
    };

    let config = {
        tableName : 'movies',
        timestamps: false
    }; 



    const Movie = sequelize.define(alias,cols,config)

    Movie.associate = function( models) {
        Movie.belongsTo(models.Categories, {
            as : 'categories',
            foreignKey : 'category_id'
        }) 
    }

    return Movie
}
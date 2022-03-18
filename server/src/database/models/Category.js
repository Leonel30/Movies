module.exports = (sequelize , dataTypes) => {
    let alias = 'Categories';
    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type: dataTypes.STRING
        }
    }; 

    let config = {
        tableName : 'category',
        timestamps : false
    }
    const Category = sequelize.define( alias,cols,config)

    Category.associate = function(models){
        Category.hasMany(models.Movies, {
            as:'movies',
            foreignKey : 'category_id'
        })
    }

    return Category
}
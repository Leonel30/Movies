module.exports = (sequelize, dataTypes) => {

    let alias = 'Tests';
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey :true,
            autoIncrement : true
        },
        name:{
              type: dataTypes.STRING
        },
        age : {
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName : 'testing',
        timestamps: false
    }
    const Test = sequelize.define(alias, cols, config)

    return Test;    
}
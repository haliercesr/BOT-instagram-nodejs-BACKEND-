const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('comments', {
        id: {
            type: DataTypes.INTEGER,    //tambien se puede hacer con DataTypes.UUID Y en vez de autoIncrement usamos defaultValue:DataTypes.UUID
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idComments: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
        {
            timestamps:false,  //sirve para desaparezca createdAt y updatedAt
           // createdAt: false,
           // updatedAt:false,

        });
};
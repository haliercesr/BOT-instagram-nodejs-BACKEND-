const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Comments', {
        id: {
            type: DataTypes.INTEGER,    //tambien se puede hacer con DataTypes.UUID Y en vez de autoIncrement usamos defaultValue:DataTypes.UUID
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        timeComments: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
        {
            timestamps:false,  //sirve para desaparezca createdAt y updatedAt
           // createdAt: false,
           // updatedAt:false,

        });
};
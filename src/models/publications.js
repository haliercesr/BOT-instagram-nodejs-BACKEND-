const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('publications', {
    id: {
      type: DataTypes.UUID,    //tambien se puede hacer con DataTypes.UUID Y en vez de autoIncrement usamos defaultValue:DataTypes.UUIDV4(ESTO HACE QUE LOS ID SEAN DIFERENTES)
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    identificatorPost: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,  //ESTO SIRVE PARA DIFERENCIAR PERROS QUE SON TRAIDOS DESDE LA BD O LA API A MI FRONTEND, CUANDO LOS TRAIGO DE LA BD SERA TRUE Y CUANDO LOS TRAIGO DE LA API CREO UNA PROPIEDAD "CREATED:FALSE" 
      defaultValue: true,
    },
  },
    {
      timestamps: false,  //sirve para desaparesca createdAt y updatedAt
      // createdAt: false,
      // updatedAt:false,
    }
  );
};
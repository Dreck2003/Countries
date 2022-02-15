const {DataTypes}= require('sequelize');


module.exports=(sequelize)=>{

    sequelize.define("Activities",{
        id:{
            primaryKey:true,
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:null,
            unique:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,

        },
        dificultad:{
            type:DataTypes.INTEGER,

        },
        duration:{
            //creo que son en DIAS o semanas
            type:DataTypes.INTEGER,

        },
        season:{
            type:DataTypes.ENUM('Spring','Summer','Autumn','Winter'),
        },

        

    },{
        timestamps:false
    })

}


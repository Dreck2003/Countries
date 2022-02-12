

const { Router } = require("express");
const express = require("express");
const {Activity}=require('../db');

const activity=express.Router();


activity.post('/activity',(req,res,next)=>{
    console.log('paso por el ACTIVITY')
    const {name,dificultad,duracion,}= req.body;
    console.log(name,dificultad,duracion)
    return res.json({ name: name, dificultad: dificultad, duracion: duracion });
    next();

})




module.exports=activity;
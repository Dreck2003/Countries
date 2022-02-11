const {Router}= require('express');
const express = require('express');
const {Countries}=require('../db');


const order =express.Router();


order.get('/countries/orden/:order',(req,res,next) => {

    const {order}=req.params;
    console.log(order);

    if(order){

        return Countries.findAll({
            order:[
                ['name','DESC']
            ]
        })
        .then(countries=>{
            return res.json(countries);
        })
        .catch(err=>{
            return res.send('algo salio mal')
        })

    }


    return res.send(order);

})



module.exports=order;

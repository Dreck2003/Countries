const { Router, application } = require('express');
const allRouter = require('./allCountries');
const IDCountry = require('./IDCountry');
const nameCountry = require('./nameCoun');
const activity= require('./activity.js');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// console.log(router);
// console.log('Este es el router: ',Router);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", activity);
router.use('/', allRouter);
router.use("/", nameCountry);
router.use('/',IDCountry);

router.use((error,req,res,next) => {
    console.log('HA ocurrido un error')

    return res.status('500').send({
        message:error.mess || error,
    })
   
})









module.exports = router;

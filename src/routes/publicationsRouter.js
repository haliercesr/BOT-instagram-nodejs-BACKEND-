//TODOS LOS ENDPOINTS DE "/drivers" VAN AQUI, CUANTO MAS MODULARICE MEJOR (puedo separar routes por driversRoutes.js, teamsRoutes,etc.)
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const{getAccountProfileHandler, postMessageHandler}=require('../handlers/publicationsRouterHandler')



const publicationsRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


publicationsRouter.get('/',getAccountProfileHandler); 
publicationsRouter.post('/', postMessageHandler);






module.exports = publicationsRouter;

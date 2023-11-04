//DESDE AQUI SEPARO LAS RUTAS, SEGUN EL ENDPOINT QUE LLEGE
//PRIMERO VERIFICO QUE LAS RUTAS ESTEN BIEN Y LUEGO CREO LOS HANDLERS
const { Router } = require('express');
const publicationsRouter=require('./publicationsRouter');
const commentsRouter=require('./commentsRouter');
const webhookVerifyRouter=require('./webhookVerifyRouter')


const mainRouter = Router();

mainRouter.use("/publications",publicationsRouter);

mainRouter.use("/comments",commentsRouter);

mainRouter.use("/messaging-webhook",webhookVerifyRouter);

module.exports = mainRouter;

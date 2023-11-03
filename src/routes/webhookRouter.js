const { Router } = require('express');
const {postWebhookHandler}=require('../handlers/webhookRouterHandler')

const webhookRouter = Router();

webhookRouter.post('/',postWebhookHandler); 


module.exports = webhookRouter;
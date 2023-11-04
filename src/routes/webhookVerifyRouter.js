const { Router } = require('express');
const{getwebhookVerifyRouterHandler,postWebhookHandler}=require('../handlers/webhookVerifyRouterHandler')

const webhookVerifyRouter = Router();

webhookVerifyRouter.get('/',getwebhookVerifyRouterHandler); 
webhookVerifyRouter.post('/',postWebhookHandler);

module.exports = webhookVerifyRouter;


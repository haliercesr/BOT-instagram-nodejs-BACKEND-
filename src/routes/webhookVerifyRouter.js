const { Router } = require('express');
const{getwebhookVerifyRouterHandler,postWebhookHandler}=require('../handlers/webhookVerifyRouterHandler')

const webhookVerifyRouter = Router();

webhookVerifyRouter.get('/',getwebhookVerifyRouterHandler); 
webhookVerifyRouter.get('/',postWebhookHandler);

module.exports = webhookVerifyRouter;


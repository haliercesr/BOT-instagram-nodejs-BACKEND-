const { Router } = require('express');
const{getwebhookVerifyRouterHandler}=require('../handlers/webhookVerifyRouterHandler')

const webhookVerifyRouter = Router();

webhookVerifyRouter.get('/',getwebhookVerifyRouterHandler); 


module.exports = webhookVerifyRouter;


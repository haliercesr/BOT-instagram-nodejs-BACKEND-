//DESDE AQUI SEPARO LAS RUTAS, SEGUN EL ENDPOINT QUE LLEGE
//PRIMERO VERIFICO QUE LAS RUTAS ESTEN BIEN Y LUEGO CREO LOS HANDLERS
const { Router } = require('express');
const publicationsRouter=require('./publicationsRouter');
const commentsRouter=require('./commentsRouter');
const webhookRouter=require('./webhookRouter');
require("dotenv").config();
const {
    verifyToken
} = process.env;


const mainRouter = Router();

mainRouter.use("/publications",publicationsRouter);

mainRouter.use("/comments",commentsRouter);

mainRouter.use("/webhook",webhookRouter);

mainRouter.use('/messaging-webhook',
// Add support for GET requests to our webhook
app.get("/messaging-webhook", (req, res) => {
  
    // Parse the query params
      let mode = req.query["hub.mode"];
      let token = req.query["hub.verify_token"];
      let challenge = req.query["hub.challenge"];
    
      // Check if a token and mode is in the query string of the request
      if (mode && token) {
        // Check the mode and token sent is correct
        if (mode === "subscribe" && token === verifyToken) {
          // Respond with the challenge token from the request
          console.log("WEBHOOK_VERIFIED");
          res.status(200).send(challenge);
        } else {
          // Respond with '403 Forbidden' if verify tokens do not match
          res.sendStatus(403);
        }
      }
    })
)
module.exports = mainRouter;

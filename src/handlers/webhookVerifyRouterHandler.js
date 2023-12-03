const { response } = require('express');
const { postComment } = require('../controllers/postComment');
require("dotenv").config();
const {
  verifyToken
} = process.env;


const getwebhookVerifyRouterHandler = async (req, res) => {

  // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    console.log(verifyToken)
    if (mode === "subscribe" && token === verifyToken) {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }


}

const postWebhookHandler = async (req, res) => {
  try {

    let body = req.body;

    console.log(`\u{1F7EA} Received webhook:`);
    console.dir(body, { depth: null });


    // Send a 200 OK response if this is a page webhook

    if (body.object === "instagram") {
      // Returns a '200 OK' response to all requests
      
      //VARIABLES PARA COMENTARIO EN UNA PUBLICACION
      const field = body.entry[0].changes[0].field ? body.entry[0].changes[0].field : null;
      const media = body.entry[0].changes[0].value.media.media_product_type ? body.entry[0].changes[0].value.media.media_product_type : null;
      const idClient = body.entry[0].changes[0].value.from.id ? body.entry[0].changes[0].value.from.id : null;
      const time=body.entry[0].time ? body.entry[0].time : null;
      const textMessage = body.entry[0].changes[0].value.text ? body.entry[0].changes[0].value.text : null;
      const textMessageFormat = textMessage.toLowerCase()
      
      //---------------------------------------------


      //VARIABLES PARA EL MENSAJE BIENVENIDA EN INSTAGRAM DIRECT
      /*const idDestinatarioPSID=body.entry[0].messaging[0].sender.id ? body.entry[0].messaging[0].sender.id : null
      const textMessagePSID=body.entry[0].messaging[0].message.text ? body.entry[0].messaging[0].message.text : null
      const textMessagePSIDFormat = textMessage.toLowerCase()*/
      //--------------------------------------------------------


      //RESPUESTA A COMENTARIO "EU QUERO"
      if (field && field === "comments" && media === "REELS" && textMessageFormat === "quiero" ) {
        const idcomment = body.entry[0].changes[0].value.id ? body.entry[0].changes[0].value.id : null

        response = await postComment(idcomment,idClient,time);  //CONTESTA EL COMENTARIO Y ENVIA UN MENSAJE POR PRIVADO CON EL LINK
       

        if (response===true) return res.status(200).send("EVENT_RECEIVED");

        // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.

      } 
      //--------------------------------

     /* //RESPUESTA A UN MESAJE DIRECTO POR INSTAGRAM DIRECT
        if (idDestinatarioPSID && textMessagePSIDFormat === "hola") {
        const idcomment = body.entry[0].changes[0].value.id
        response = await postComment(idcomment);
        console.log(response)

        return res.status(200).send("EVENT_RECEIVED");

        // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.

      } else {
        // Return a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
      }*/
      //--------------------------------------------------

      return res.sendStatus(404)
    }
    return res.sendStatus(404)
  } catch (error) {
    console.log(error.message)
    console.log("error en el Handler")
    res.status(400).json({ error: error.message });
  }

};

module.exports = {
  getwebhookVerifyRouterHandler,
  postWebhookHandler
}



const { postComment } = require('../controllers/postComment');
require("dotenv").config();
const {
    verifyToken
} = process.env;


const getwebhookVerifyRouterHandler=async(req,res)=>{ 
 
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

const postWebhookHandler= async (req, res) => {
  try {
    
    let body = req.body ;   

    console.log(`\u{1F7EA} Received webhook:`);
    console.dir(body, { depth: null });

    
// Send a 200 OK response if this is a page webhook

if (body.object === "instagram") {
// Returns a '200 OK' response to all requests

const field =body.object.changes[0].field?body.object.changes[0].field:null;
const media =body.object.changes[0].value.media.media_product_type?body.object.changes[0].value.media.media_product_type:null;

if(field &&  field==="comments" && media && media==="FIELD"){
const idcomment=body.object.changes[0].id
response= await postComment(idcomment);
console.log(idcomment)

return res.status(200).send("EVENT_RECEIVED");

// Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.

} else {
// Return a '404 Not Found' if event is not from a page subscription
res.sendStatus(404);
}
}

} catch (error) {
    console.log(error.message)
    res.status(400).json({error: error.message}); 
}

};

module.exports={
    getwebhookVerifyRouterHandler,
    postWebhookHandler
  }



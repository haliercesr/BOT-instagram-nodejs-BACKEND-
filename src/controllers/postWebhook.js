const axios = require('axios');
const URLAPIfacebook=require('../configURL.js')
require("dotenv").config();
const {
  accessToken, versionApi, idUserInstagram
} = process.env;

//POST | /webhook

const postWebhook=()=>{ 

  return "holaa"

}

module.exports = {postWebhook};
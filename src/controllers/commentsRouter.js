const axios = require('axios');
const URLdrivers = 'http://localhost:5000/drivers';
const URLAPIfacebook=require('../configURL.js')
require("dotenv").config();
const {
  accessToken, versionApi, idUserInstagram
} = process.env;

//GET | /teams

const getComments=async()=>{ 
//const getComments=async()=>{ 
  return "holaa"

}

module.exports = {getComments};

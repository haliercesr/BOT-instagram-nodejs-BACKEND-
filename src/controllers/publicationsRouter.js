const axios = require('axios');
const { publications, comments } = require('../db')
const { Op } = require("sequelize");  //se utiliza Op para definir operadores de consultas en SQL, con Op podemos realizar busquedas mas complejas.
const URLAPIfacebook=require('../configURL.js' )
require("dotenv").config();
const {
  accessToken, versionApi, idUserInstagram
} = process.env;


const getAccountProfile = async () => {
    try{
     const response=(await axios.get(`${URLAPIfacebook}/${versionApi}/${idUserInstagram}?fields=media,username,profile_picture_url,ig_id,biography&access_token=${accessToken}`)).data;
     const response1=(await axios.get(`${URLAPIfacebook}/${versionApi}/${idUserInstagram}/media?fields=id,media_url&access_token=${accessToken}`)).data;
    
     return {response,response1}

    }catch(error){
        throw error;
    }
}


//POST | /driver

const postMessage = async () => {
   
    try{
    
return 'HOLAAAA'

}catch(error){  
    console.error(error.message);
    throw Error(error)

}
}

module.exports = { getAccountProfile, postMessage }
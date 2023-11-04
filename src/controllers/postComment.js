const axios = require('axios');
const URLAPIfacebook=require('../configURL.js' )
const {
  accessToken
} = process.env;

//POST | /webhook

const postComment= async(idcomment)=>{ 
  try{
    const idReply=(await axios.get(`${URLAPIfacebook}/${idcomment}/replies?message=*Obrigado!!, enviamos-lhe uma mensagem privada*&access_token=${accessToken}`)).data;
    
   
    return idReply

   }catch(error){
       throw error;
   }
  

}

module.exports = {postComment};
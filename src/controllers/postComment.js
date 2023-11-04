const axios = require('axios');
const URLAPIfacebook=require('../configURL.js' )
const {
  accessToken,versionApi
} = process.env;

//POST | /webhook

const postComment= async(idcomment)=>{ 
  try{
    const emoji = "\u{1F604}"; // Representa la carita feliz 😄

    const idReply=(await axios.get(`${URLAPIfacebook}/${versionApi}/${idcomment}/replies?message=Obrigado!, enviamos uma mensagem privada para você ${emoji}&access_token=${accessToken}`)).data;
    
   
    return idReply

   }catch(error){
       throw error;
   }
  

}

module.exports = {postComment};
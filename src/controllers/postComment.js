const axios = require('axios');
const URLAPIfacebook=require('../configURL.js' )

//POST | /webhook

const postComment= async(idcomment)=>{ 
  try{
    const idReply=(await axios.get(`${URLAPIfacebook}/${idcomment}/replies?message=*Obrigado!!, enviamos-lhe uma mensagem privada*&access_token=${accessToken}`)).data;
    
   
    return idResp

   }catch(error){
       throw error;
   }
  

}

module.exports = {postComment};
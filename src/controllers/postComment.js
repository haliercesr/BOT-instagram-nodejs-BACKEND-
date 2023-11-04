const axios = require('axios');
const URLAPIfacebook=require('../configURL.js' )
const {
  accessToken,versionApi
} = process.env;

//POST | /webhook

const postComment= async(idcomment)=>{ 
  try{
    const emoji = "\u{1F604}"; // Representa la carita feliz 😄
    const message = "Olá, seu link foi enviado obrigado!"
    console.log(idcomment,"w")
    const idReply=(await axios.post(`${URLAPIfacebook}/${versionApi}/${idcomment}/replies?message=${message}${emoji}&access_token=${accessToken}`)).data;
    
   
    return idReply

   }catch(error){
       throw error;
   }
  

}

module.exports = {postComment};
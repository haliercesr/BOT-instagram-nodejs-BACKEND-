const axios = require('axios');
const URLAPIfacebook=require('../configURL.js' )
const URLdrivers = 'http://localhost:5000/drivers'
const {
  accessTokenUser,versionApi,page_id,accessTokenPage
} = process.env;

//POST | /webhook

const postComment= async(idcomment,idClient)=>{ 
  try{
    const {reelsInstagramDB}=await axios.get(`${URLdrivers}`)
    console.log(reelsInstagramDB)
    const emoji = "\u{1F604}"; // Representa la carita feliz 😄
    const message = "Olá, seu link foi enviado obrigado!"
    console.log(idClient)

    //SE CONTESTA EL MENSAJE
    const idReply=(await axios.post(`${URLAPIfacebook}/${versionApi}/${idcomment}/replies?message=${message}${emoji}&access_token=${accessTokenUser}`)).data;
    //----------------------
    
    //SE ENVIA UN MENSAJE POR PRIVADO CON EL LINK
    const response=(await axios.post(`${URLAPIfacebook}/${versionApi}/${page_id}/messages?recipient={id:${idClient}}&message={text:'Hola, te dejamos el link: www.ejemplo.com'}&messaging_type=RESPONSE&access_token=${accessTokenPage}`)).data;
    
   
    return true

   }catch(error){
    console.log("error en el postcomment")
       throw error;
   }
}

const postMessageDirect=()=>{
  try{
     return "hola"
  }catch(error){
    throw error
  }
}

module.exports = {postComment};
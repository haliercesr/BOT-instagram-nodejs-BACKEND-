const axios = require('axios');
const URLAPIfacebook=require('../configURL.js' )
const { Comments } = require('../db.js')
//const URLdrivers = 'http://localhost:5000/drivers'
const {
  accessTokenUser,versionApi,page_id,accessTokenPage
} = process.env;

//POST | /webhook

const postComment= async(idcomment,idClient,time)=>{ 
  try{
    
    const emoji = "\u{1F604}"; // Representa la carita feliz 😄
    const message = "Olá, seu link foi enviado obrigado!"

    const messagePrivate=`{
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"generic",
          "elements":[
             {
              "title":"Welcome!",
              "image_url":"https://github.com/fbsamples/original-coast-clothing/blob/main/public/looks/male-work.jpg",
              "subtitle":"We have the right hat for everyone.",
              "default_action": {
                "type": "web_url",
                "url": "https://www.originalcoastclothing.com",
              },
              "buttons":[
                {
                  "type":"web_url",
                  "url":"https://www.originalcoastclothing.com",
                  "title":"View Website"
                },{
                  "type":"postback",
                  "title":"Start Chatting",
                  "payload":"DEVELOPER_DEFINED_PAYLOAD"
                }              
              ]      
            }
          ]
        }
      }
    }`
    

    //DATOS DE TODOS LOS REELS PUBLICADOS
    //const response1=await axios.get(`${URLdrivers}`)
    //console.log(response1)
    //-----------------------------------

    //SE CONTESTA EL MENSAJE
    const [createdComment,created]=await Comments.findOrCreate({          //busca en la base de datos si existe el comentario                                                          //model query: busca segun las condiciones en where y si no las encuentra crea una entrada segun las condiciones. Luego devuelve la instancia creada o encontrada.Created tiene un valor booleano
      where: { idComments:time },
  })

   if(created){
    const idReply=(await axios.post(`${URLAPIfacebook}/${versionApi}/${idcomment}/replies?message=${message}${emoji}&access_token=${accessTokenUser}`)).data;
   

    //----------------------
    
    //SE ENVIA UN MENSAJE POR PRIVADO CON EL LINK
    const response=(await axios.post(`${URLAPIfacebook}/${versionApi}/${page_id}/messages?recipient={id:${idClient}}&message=${messagePrivate}}&messaging_type=RESPONSE&access_token=${accessTokenPage}`)).data;  //'Olá, deixamos o link: Dieta Flexivel https://sun.eduzz.com/1871350?a=58504888  Desafio 21 dias https://p.eduzz.com/651322?a=58504888
    console.log(response)

   }
   
    return created

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
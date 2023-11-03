const {getComments}=require('../controllers/commentsRouter');
const { comments } = require('../db')

const getCommentsHandler=async(req,res)=>{ 

    try{
    const response=await getComments()
 
    res.status(200).json(response)
    }catch(error){ 
        console.log(error.message)
        return res.status(400).json({error:error.message})}

}


module.exports={
    getCommentsHandler}
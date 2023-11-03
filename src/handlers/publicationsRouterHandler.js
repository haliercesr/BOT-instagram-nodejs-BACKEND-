const { getAccountProfile, postMessage } = require('../controllers/publicationsRouter');


//GET | /publications

const getAccountProfileHandler = async (req, res) => {
    try {
        response= await getAccountProfile();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message});  //UNA MEJOR MANERA DE MANEJAR EL ERROR PUEDE SER DISCRIMINANDO A QUE INSTANCIA PERTENECE
    }
};

// POST | /publications

const postMessageHandler = async (req, res) => {

    try {

        const response=await postMessage()

        return res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({error: error.message })
    }
}

module.exports = {
    getAccountProfileHandler,
    postMessageHandler,
}
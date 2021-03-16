const { Home , Registro } = require('../Helpers/routesNames');
const { BAD_REQUEST , OK } = require('../Helpers/statusCode');
const { MESSAGE_OK , MESSAGE_BAD_REQUEST , MESSAGE_WELCOME} = require('../Helpers/statusMessage');
const { GET , POST , DELETE , PUT } = require('../Helpers/requestMethods'); 
const RegistroController = require('../Controllers/RegistroController');


let registroController = new RegistroController();


// await fetch("https://api.jsonbin.io/b/604e5efe7ffeba41c078cc77")
// .then(res => res.json())
// .then(json => statusResponse.data = json);

const routes = async (request,response) =>{
    let statusResponse = {
        status : OK,
        statusMessage : MESSAGE_OK,
    }

    switch (true) {
        case request.url === Home && request.method == GET:
            statusResponse.statusMessage = MESSAGE_WELCOME ;
            setResponse(response,statusResponse);
            break;
        case request.url === Registro && request.method == POST:
            await registroController.registrarUser(request,response);
            break;   
        default:
            response.statusCode = BAD_REQUEST;
            statusResponse.status = BAD_REQUEST;
            statusResponse.statusMessage = MESSAGE_BAD_REQUEST;
            setResponse(response,statusResponse);
            break;
    }
  
}

const setResponse = (response,statusResponse) =>{
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(statusResponse))
}


module.exports = routes;
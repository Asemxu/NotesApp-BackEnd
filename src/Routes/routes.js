const { Home , HomeSlash , Registro , Login } = require('../Helpers/routesNames');
const { BAD_REQUEST , OK , PASS } = require('../Helpers/statusCode');
const { MESSAGE_OK , MESSAGE_BAD_REQUEST , MESSAGE_WELCOME} = require('../Helpers/statusMessage');
const { GET , POST , DELETE , PUT } = require('../Helpers/requestMethods'); 
const RegistroController = require('../Controllers/RegistroController');
const LoginController = require('../Controllers/LoginController');

const registroController = new RegistroController();
const loginController = new LoginController(); 


const routes = async (request,response) =>{
    let statusResponse = {
        statusCode : OK,
        statusMessage : MESSAGE_OK,
    }

    switch (PASS) {
        case request.url === Home || request.url === HomeSlash && request.method == GET:
            statusResponse.statusMessage = MESSAGE_WELCOME ;
            setResponse(response,statusResponse);
            break;
        case request.url === Registro && request.method == POST:
            await registroController.registrarUser(request,response);
            break;   
        case  request.url === Login && request.method == POST:
            await loginController.loginUser(request,response);
            break
        default:
            response.statusCode = BAD_REQUEST;
            statusResponse.statusCode = BAD_REQUEST;
            statusResponse.statusMessage = MESSAGE_BAD_REQUEST;
            setResponse(response,statusResponse);
            break;
    }
}

const setResponse = (response,statusResponse) =>{
    response.end(JSON.stringify(statusResponse))
}


module.exports = routes;
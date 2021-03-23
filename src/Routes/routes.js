const { Home , HomeSlash , Registro , Login ,Cuenta } = require('../Helpers/routesNames');
const { BAD_REQUEST , OK , PASS } = require('../Helpers/statusCode');
const { MESSAGE_OK , MESSAGE_BAD_REQUEST , MESSAGE_WELCOME} = require('../Helpers/statusMessage');
const { GET , POST} = require('../Helpers/requestMethods'); 
const RegistroController = require('../Controllers/RegistroController');
const LoginController = require('../Controllers/LoginController');
const CuentaController = require('../Controllers/CuentaController');
const UserController = require('../Controllers/UserController');

const registroController = new RegistroController();
const loginController = new LoginController(); 
const cuentaController = new CuentaController();
let userController = null;

const routes = async (request,response,transporter) =>{
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
            await registroController.registrarUser(request,response,transporter);
            break;   
        case  request.url === Login && request.method == POST:
            await loginController.loginUser(request,response);
            break
        case request.url === Cuenta && request.method == POST:
            await cuentaController.activarCuenta(request,response);
            break;
        case request.url.match(/\/api\/v1\/AppNotes\/User\/(\w+\-+\w+)*$/) !== null:
            userController = new UserController(request.url)
            const path = userController.url.split('/').slice(-1)[0];
            userController.validateRoutes(path,request,response,transporter);
            break;
        default:
            response.statusCode = BAD_REQUEST;
            statusResponse.statusCode = BAD_REQUEST;
            statusResponse.statusMessage = MESSAGE_BAD_REQUEST;
            setResponse(response,statusResponse);
            break;
    }
}

const setResponse = (response,statusResponse) =>{
    response.writeHead(BAD_REQUEST, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(statusResponse))
}


module.exports = routes;
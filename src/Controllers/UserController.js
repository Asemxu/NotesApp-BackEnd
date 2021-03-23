const { DESLOGUED , CHANGEPASS } = require('../Helpers/statusMessage');
const User = require('../Models/User');
const { cerrarSesion , emailCambiarContraseña , cambiarContraseña } = require('../Helpers/routesNames');
const getBody = require('../Utils/getBody');
const { POST , GET } = require('../Helpers/requestMethods'); 
const  { WRONGMETHOD  } = require('../Helpers/errorsMessage');
const { validarEmailContraseña , validarCambiarContraseña } = require('../Validator/validator');
const { CHANGEPASSWORD } = require('../Helpers/statusCode');
const sendEmail = require('../Services/Email');
class UserController {
    constructor(url){
        this.url = url;

        this.validateRoutes = (methodOrId,req,res,transporter) =>{
            switch(methodOrId){
                case cerrarSesion:
                    if(req.method == POST)
                        signOut(req,res);
                    else
                        setHeaders(false,WRONGMETHOD(req.method),res);
                    break;
                case emailCambiarContraseña:
                    if(req.method == POST)
                        sendEmailPassWord(req,res,transporter);
                    else
                        setHeaders(false,WRONGMETHOD(req.method),res);
                    break;
                case cambiarContraseña:
                    if(req.method == POST)
                        changePassword(req,res);
                    else
                        setHeaders(false,WRONGMETHOD(req.method),res);
                    break;
                default:
                    console.log("Method put post o delete");
                    break;
            }
        }
    }
}

const changePassword = async (req,res) =>{
    try{
        const userData= await getBody(req);
        let response = await validarCambiarContraseña(userData);
        if(response.status){
            response = await User.cambiarContraseña(userData,response);
            if(response.status)
                response.message = CHANGEPASS;
        }
        setHeaders(response.status,response.message,res);
    }catch(error){
        console.log(error); 
        setHeaders(503,error.message,res);
    }
}

const sendEmailPassWord  = async (req,res,transporter) =>{
    try{
        const userEmail = await getBody(req);
        let response = await validarEmailContraseña(userEmail.correo);
        if(response.status){
            const userData = await User.findUserEmail(userEmail.correo);
            const response_data = await sendEmail(transporter,userData,CHANGEPASSWORD);
            response.status = response_data.status;
            response.message = response_data.message;
        }
        setHeaders(response.status,response.message,res);
    }catch(error){
        console.log(error); 
        setHeaders(503,error.message,res);
    }
}

const signOut = async  (req,res) =>{
    try{
        const userId = await getBody(req);
        await User.cerrarSesion(userId.id);
        setHeaders(true,DESLOGUED,res);
    }catch(error){
        console.log(error); 
        setHeaders(503,error.message,res);
    }
}

const setHeaders = (status,message,res) =>{
    let response = {status : status,message: message};
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(response)); 
}
module.exports = UserController;
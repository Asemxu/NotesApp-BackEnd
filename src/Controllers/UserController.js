const { validarIsActivated } = require('../Validator/validator');
const { DESLOGUED } = require('../Helpers/statusMessage');
const User = require('../Models/User');
const { cerrarSesion } = require('../Helpers/routesNames');
const getBody = require('../Utils/getBody');
const { GET , DELETE , PUT } = require('../Helpers/requestMethods'); 
const  { WRONGDESLOGUED } = require('../Helpers/errorsMessage');
class UserController {
    constructor(url){
        this.url = url;

        this.validateRoutes = (methodOrId,req,res) =>{
            if(methodOrId === cerrarSesion){
                if(req.method == PUT)
                    signOut(req,res);
                else
                    setHeaders(false,WRONGDESLOGUED(req.method),res);

            }else{
                console.log("Method put post o delete");
            }
        }
       
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
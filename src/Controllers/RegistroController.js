const User = require('../Models/User');
const getBody = require('../Utils/getBody');
const { validarRegistro , validarSendEmail } = require('../Validator/validator');
const { MESSAGE_USER_REGISTER } = require('../Helpers/statusMessage');
const getUUid = require('../Utils/getUUid');
class RegistroController {
    constructor(){
        this.registrarUser = async (req,res,transporter) =>{
            try{
                const userData = await getBody(req);
                let response = await validarRegistro(userData);
                if(response.status){
                    userData.id = getUUid();
                    response = await validarSendEmail(transporter,userData,"Registro");
                    if(response.status){
                        await User.createUserDB(userData,transporter);
                        response.message = MESSAGE_USER_REGISTER(userData.correo,response.message);
                    }
                    
                }
                res.writeHead(200, {'Content-Type': 'application/json' ,})
                return res.end(JSON.stringify(response));
            }catch(error){
                console.log(error);
                return res.end(JSON.stringify({status : 503,message: error.message})) 

            }
        }       
    }    
}


module.exports = RegistroController;
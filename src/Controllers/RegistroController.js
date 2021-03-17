const User = require('../Models/User');
const getBody = require('../Utils/getBody');
const { validarRegistro } = require('../Validator/validator');
const { MESSAGE_USER_REGISTER } = require('../Helpers/statusMessage');
class RegistroController {
    constructor(){
        this.registrarUser = async (req,res) =>{
            try{
                const userData = await getBody(req);
                const response = await validarRegistro(userData);
                if(response.status){
                    await User.createUserDB(userData);
                    response.message = MESSAGE_USER_REGISTER(userData.correo);
                }
                res.writeHead(200, {'Content-Type': 'application/json' ,})
                return res.end(JSON.stringify(response));
            }catch(error){
                return res.end(JSON.stringify({status : 503,message: error})) 

            }
        }
    }
}


module.exports = RegistroController;
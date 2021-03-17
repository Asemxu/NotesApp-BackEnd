const { validarLogin } = require('../Validator/validator');
const { MESSAGE_USER_LOGIN } = require('../Helpers/statusMessage');
const getBody = require('../Utils/getBody');
class LoginController {
    constructor(){
        this.loginUser = async  (req,res) =>{
            try{
                const userData = await getBody(req);
                const response = await validarLogin(userData);
                if(response.status){
                    await User.setIsLogued(userData);
                    response.message = MESSAGE_USER_LOGIN(userData.correo);
                }
                res.writeHead(200, {'Content-Type': 'application/json' ,})
                return res.end(JSON.stringify(response));
            }catch(error){
                return res.end(JSON.stringify({status : 503,message: error})) 

            }
        }
    }
}

module.exports = LoginController;
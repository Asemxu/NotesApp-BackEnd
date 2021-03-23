const { validarIsActivated } = require('../Validator/validator');
const { ACCOUNT_ACTIVATED } = require('../Helpers/statusMessage');
const User = require('../Models/User');
const getBody = require('../Utils/getBody');
class CuentaController {
    constructor(){
        this.activarCuenta = async  (req,res ) =>{
            try{
                const userId = await getBody(req);
                const response = await validarIsActivated(userId.id);
                if(response.status){
                    const newID = await User.setAcountActivated(userId.id)
                    const userData = await User.findUserDB (newID);
                    response.message = ACCOUNT_ACTIVATED(userData.correo);
                }
                res.writeHead(200,{'Content-type':'aplication/json'});
                return res.end(JSON.stringify(response));
            }catch(error){
                console.log(error);
                return res.end(JSON.stringify({status : 503,message: error.message})) 

            }
        }
    }
}

module.exports = CuentaController;
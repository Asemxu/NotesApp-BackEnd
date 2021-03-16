const User = require('../Models/User');
const getBody = require('../Utils/getBody');
const { validarRegistro } = require('../Validator/validator');
class RegistroController {
    constructor(){
        this.registrarUser = async (req) =>{
            try{
                const userData = await getBody(req);
                validarRegistro(userData);
            }catch(error){
                console.log(error)
            }
        }
    }
}


module.exports = RegistroController;
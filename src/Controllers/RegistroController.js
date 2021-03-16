const User = require('../Models/User');
const getBody = require('../Utils/getBody');
const { validarRegistro } = require('../Validator/validator');
class RegistroController {
    constructor(){
        this.registrarUser = async (req,res) =>{
            try{
                const userData = await getBody(req);
                const status = validarRegistro(userData);
                if(status.status){
                    await User.createUserDB(userData);
                    status.message = `El usuario con correo ${userData.correo} ha sido registrado 🙂 🙂 `;
                }
                res.writeHead(200, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify(status));
            }catch(error){
                console.log(error)
            }
        }
    }
}


module.exports = RegistroController;
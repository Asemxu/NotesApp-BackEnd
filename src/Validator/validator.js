const { EMPTYFIELDMESSAGE }  = require('../Helpers/errorsMessage');
const validator = require('validator');



const validarRegistro = (userData) =>{
    console.log(isValid(userData));

}


const isValid = (userData) =>{

    let statusValid = {
        status : true,
        message : "Éxito"
    }
    
    if(validator.isEmpty(userData.name) || validator.isEmpty(userData.apellidos) || validator.isEmpty(userData.contraseña) 
        || validator.isEmpty(userData.recontraseña) || validator.isEmpty(userData.correo)){
        statusValid.status = false;
        statusValid.message = EMPTYFIELDMESSAGE;
    }

    return statusValid;
}


module.exports = { validarRegistro }
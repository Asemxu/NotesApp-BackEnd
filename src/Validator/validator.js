const { EMPTYFIELDMESSAGE , EMAILNOTFORMAT , PASSDONTCOINCIDE}  = require('../Helpers/errorsMessage');
const validator = require('validator');



const validarRegistro = (userData) =>{
    let respuesta = isValidRegistro(userData);
    return respuesta;
}


const isValidRegistro = (userData) =>{
    let statusValid = {
        status : true,
        message : "Éxito"
    }
    if(validator.isEmpty(userData.nombres) || validator.isEmpty(userData.apellidos) || validator.isEmpty(userData.contraseña) 
        || validator.isEmpty(userData.recontraseña) || validator.isEmpty(userData.correo)){
        statusValid.status = false;
        statusValid.message = EMPTYFIELDMESSAGE;
    }else{
        if(!validator.isEmail(userData.correo)){
            statusValid.status = false;
            statusValid.message = EMAILNOTFORMAT;
        }else{
            if(userData.contraseña !== userData.recontraseña){
                statusValid.status = false;
                statusValid.message = PASSDONTCOINCIDE;
            }
        }
    }
    return statusValid;
}


module.exports = { validarRegistro }
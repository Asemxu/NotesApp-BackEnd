const { EMPTYFIELDMESSAGE , EMAILNOTFORMAT , PASSDONTCOINCIDE ,EXISTUSERWITHEMAIL , DONTEXISTUSERWITHEMAIL}  = require('../Helpers/errorsMessage');
const { MESSAGE_OK } = require('../Helpers/statusMessage');
const { PASS , DONTPASS } = require('../Helpers/statusCode');
const User = require('../Models/User');
const validator = require('validator');


const validarLogin = (userData) =>{
    let respuesta = isValidLogin(userData);
    return respuesta;
}

const isValidLogin = async (userData) =>{
    let statusValid = {
        status : PASS,
        message : MESSAGE_OK
    }
    if(validarCamposlogin(statusValid,userData)){
        let isUserNotFound = await validarUserExist(userData.correo);
        if(isUserNotFound){
             statusValid.status = DONTPASS;
             statusValid.message = DONTEXISTUSERWITHEMAIL(userData.correo)
        }
    }
    return statusValid;
}

const validarCamposlogin = (statusValid,userData) =>{
    if(validator.isEmpty(userData.correo) || validator.isEmpty(userData.contraseña)){
        statusValid.status = DONTPASS;
        statusValid.message = EMPTYFIELDMESSAGE;
        return DONTPASS;
    }else{
        if(!validator.isEmail(userData.correo)){
            statusValid.status = DONTPASS;
            statusValid.message = EMAILNOTFORMAT;
            return DONTPASS;
        }
    }
    return PASS;
}

const validarRegistro = (userData) =>{
    let respuesta = isValidRegistro(userData);
    return respuesta;
}


const isValidRegistro = async (userData) =>{
    let statusValid = {
        status : PASS,
        message : MESSAGE_OK
    }

    if(validarCamposRegistro(statusValid,userData)){
        let isUserFound = await validarUserExist(userData.correo);
        if(!isUserFound){
            statusValid.status = DONTPASS;
            statusValid.message = EXISTUSERWITHEMAIL(userData.correo)
        }
    }
    return statusValid;
}


const validarCamposRegistro = (statusValid,userData) =>{
    if(validator.isEmpty(userData.nombres) || validator.isEmpty(userData.apellidos) || validator.isEmpty(userData.contraseña) 
        || validator.isEmpty(userData.recontraseña) || validator.isEmpty(userData.correo)){
        statusValid.status = DONTPASS;
        statusValid.message = EMPTYFIELDMESSAGE;
        return DONTPASS;
    }else{
        if(!validator.isEmail(userData.correo)){
            statusValid.status = DONTPASS;
            statusValid.message = EMAILNOTFORMAT;
            return DONTPASS;
        }else{
            if(userData.contraseña !== userData.recontraseña){
                statusValid.status = DONTPASS;
                statusValid.message = PASSDONTCOINCIDE;
                return DONTPASS;
            }
        }
    }
    return PASS;
}

const validarUserExist = (correo) =>{
    return User.findUserDB(correo);
}

module.exports = { validarRegistro , validarLogin }
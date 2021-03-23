const { EMPTYFIELDMESSAGE , EMAILNOTFORMAT , PASSDONTCOINCIDE ,EXISTUSERWITHEMAIL , DONTEXISTUSERWITHEMAIL , WRONGPASSWORD , EMAILISOBLIGATED ,ISNOTEMAIL , DONTEXISTUSER 
    , ITSNOTACTIVATED }  = require('../Helpers/errorsMessage');
const { MESSAGE_OK, CANT_ACTIVATED_ACCOUNT } = require('../Helpers/statusMessage');
const { PASS , DONTPASS } = require('../Helpers/statusCode');
const User = require('../Models/User');
const validator = require('validator');
const bcrypt = require('bcrypt');
const sendEmail = require('../Services/Email');

const validarLogin = async  (userData) =>{
    let respuesta = await isValidLogin(userData);
    return respuesta;
}

const isValidLogin = async (userData) =>{
    let statusValid = {
        status : PASS,
        message : MESSAGE_OK
    }
    if(validarCamposlogin(statusValid,userData)){
        let isUserNotFound = await validarUserExist(userData.correo);
        if(isUserNotFound.status){
             statusValid.status = DONTPASS;
             statusValid.message = DONTEXISTUSERWITHEMAIL(userData.correo);
        }else{
            let userDB = isUserNotFound.user;
            if(!userDB.isActivated){
                statusValid = { status : DONTPASS , message : ITSNOTACTIVATED(userDB.correo)}
            }else{
                let coinciden = await bcrypt.compare(userData.contraseña,userDB.contraseña);
                !coinciden ?  statusValid = { status : DONTPASS , message : WRONGPASSWORD(userDB.correo)} : "";
            }
            
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

const validarRegistro = async (userData) =>{
    let respuesta = await isValidRegistro(userData);
    return respuesta;
}


const isValidRegistro = async (userData) =>{
    let statusValid = {
        status : PASS,
        message : MESSAGE_OK
    }

    if(validarCamposRegistro(statusValid,userData)){
        let isUserFound = await validarUserExist(userData.correo);
        if(!isUserFound.status){
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
    return User.isfindUserDB (correo);
}

const validarSendEmail  = async  (transporter,user,type) =>{
    let status = await sendEmail(transporter,user,type);
    return status;
}

const validarIsActivated = async (uid) =>{
    const userDB = await User.findUserDB (uid);
    if(userDB!==undefined)
        return {status : true};    
    return {status : false , message : CANT_ACTIVATED_ACCOUNT};
}

const validarEmailContraseña = async (correo) =>{
    let response ={
        status : true
    }
    if(validator.isEmpty(correo)){
        response.message = EMAILISOBLIGATED;
        response.status = false;
    }else{
        if(!validator.isEmail(correo)){
            response.message = ISNOTEMAIL(correo);
            response.status = false;
        }else{
            const userData = await User.findUserEmail(correo);
            if(userData === undefined || userData === null){
                response.status = false;
                response.message = DONTEXISTUSER(correo);
            }
        }
    }
    return response
}

const validarCambiarContraseña = async (userData) =>{
    let status = {
        status : true,
    }
    if(validator.isEmpty(userData.contraseña) || validator.isEmpty(userData.recontraseña)){
        status.message = EMPTYFIELDMESSAGE;
        status.status = false;
    }else{
        if(userData.contraseña !== userData.recontraseña){
            status.message = PASSDONTCOINCIDE
            status.status = false;
        }
    }
    return status;
}

module.exports = { validarRegistro , validarLogin , validarSendEmail , validarIsActivated , validarEmailContraseña , validarCambiarContraseña}
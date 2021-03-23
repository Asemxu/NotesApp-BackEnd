const MESSAGE_OK = "Éxito";
const MESSAGE_BAD_REQUEST = "Url o Metodó no bien especificados no encontrada";
const MESSAGE_WELCOME = "Bienvenido a nuestra Api AppNotes v1 "
const SEND_EMAIL_ACTIVATED = "Se ha enviado un email para confirmar su correo electrónico";
const CANT_ACTIVATED_ACCOUNT = "No se puede activar la cuenta con el mismo correo";
const DESLOGUED = "Se ha deslogueado Correctamente";
const CHANGEPASS = "Se ha Cambiado su contraseña correctamente, vuelva a loguearse Gracias 🙂 🙂";

const SEND_EMAIL_CHANGE = (correo) =>{
  return `Se ha enviado un email a ${correo} para cambiar su contraseña`;
}

const MESSAGE_USER_REGISTER = (correo,messageEmail) =>{
    return `El usuario con correo ${correo} ha sido registrado 🙂 🙂 y ${messageEmail}`;
}

const MESSAGE_USER_LOGIN = (correo) =>{
    return `El usuario con correo ${correo} esta logeado`;
}

const  ACCOUNT_ACTIVATED = (correo) =>{
    return `Su Cuenta Ha Sido Confirmada con el correo ${correo} Gracias`
}
module.exports = { MESSAGE_OK
     , MESSAGE_BAD_REQUEST  
     , MESSAGE_WELCOME 
     , MESSAGE_USER_REGISTER 
     , MESSAGE_USER_LOGIN
     , SEND_EMAIL_ACTIVATED
     , CANT_ACTIVATED_ACCOUNT
     , ACCOUNT_ACTIVATED
     , DESLOGUED
     , SEND_EMAIL_CHANGE
     , CHANGEPASS}
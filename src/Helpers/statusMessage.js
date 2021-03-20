const MESSAGE_OK = "Éxito";
const MESSAGE_BAD_REQUEST = "Url o Metodó no bien especificados no encontrada";
const MESSAGE_WELCOME = "Bienvenido a nuestra Api AppNotes v1 "
const SEND_EMAIL_ACTIVATED = "Se ha enviado un email para confirmar su correo electrónico";
const CANT_ACTIVATED_ACCOUNT = "No se pudo Activar la Cuenta";
const DESLOGUED = "Se ha deslogueado Correctamente";

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
     , DESLOGUED}
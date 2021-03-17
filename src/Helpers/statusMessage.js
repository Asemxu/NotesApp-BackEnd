const MESSAGE_OK = "Éxito";
const MESSAGE_BAD_REQUEST = "Url o Metodó no bien especificados no encontrada";
const MESSAGE_WELCOME = "Bienvenido a nuestra Api AppNotes v1 "

const MESSAGE_USER_REGISTER = (correo) =>{
    return `El usuario con correo ${correo} ha sido registrado 🙂 🙂`;
}

const MESSAGE_USER_LOGIN = (correo) =>{
    return `El usuario con correo ${correo} esta logeado`;
}
module.exports = { MESSAGE_OK , MESSAGE_BAD_REQUEST  , MESSAGE_WELCOME , MESSAGE_USER_REGISTER , MESSAGE_USER_LOGIN}
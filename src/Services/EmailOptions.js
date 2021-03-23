const getTemplateEmailActivated = require("../Templates/ActivatedEmail");
const getTemplateChangePassword = require('../Templates/CambiarContraseñaEmail ');

const emailOptions = (userData,type) =>{
    return {
        from: 'App Notes 📔 <AppNotes@gmail.com>', // sender address
        to: userData.correo, // list of receivers
        subject:  type === "Registro" ? "Confirmación de Cuenta" : "Cambio de Contraseña", // Subject line
        html: type === "Registro" ? getTemplateEmailActivated(userData) : getTemplateChangePassword(userData)
    };
}



module.exports = emailOptions;
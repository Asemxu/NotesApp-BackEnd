const EMPTYFIELDMESSAGE = "Todos los Campos con Obligatorios *"
const EMAILNOTFORMAT = "El formato de email ingresado no es válido"; 
const PASSDONTCOINCIDE = "Las contraseñas no coinciden";

const EXISTUSERWITHEMAIL = (correo) => {
    return `El Usuario con el correo ${correo} ya esta registrado`
} 

const DONTEXISTUSERWITHEMAIL = (correo) => {
    return `El Usuario con el correo ${correo} no existe`
} 
module.exports = {
    EMPTYFIELDMESSAGE,
    EMAILNOTFORMAT,
    PASSDONTCOINCIDE,
    EXISTUSERWITHEMAIL,
    DONTEXISTUSERWITHEMAIL
}
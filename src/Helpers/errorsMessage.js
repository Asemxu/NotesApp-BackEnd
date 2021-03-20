const EMPTYFIELDMESSAGE = "Todos los Campos con Obligatorios *"
const EMAILNOTFORMAT = "El formato de email ingresado no es válido"; 
const PASSDONTCOINCIDE = "Las contraseñas no coinciden";
const CANTREGISTERUSER = "No se pudo Registrar el usuario por favor intentelo mas tarde";

const WRONGPASSWORD =  (correo) =>{
    return `La contraseña ingresada no coincide con la del correo ${correo}`
}
const EXISTUSERWITHEMAIL = (correo) => {
    return `El Usuario con el correo ${correo} ya esta registrado`
} 

const DONTEXISTUSERWITHEMAIL = (correo) => {
    return `El Usuario con el correo ${correo} no existe`
} 

const WRONGDESLOGUED = (method) =>{
    return `El Metodo ${method} no es el asignado o especificado` 
}

module.exports = {
    EMPTYFIELDMESSAGE,
    EMAILNOTFORMAT,
    PASSDONTCOINCIDE,
    EXISTUSERWITHEMAIL,
    DONTEXISTUSERWITHEMAIL,
    WRONGPASSWORD,
    CANTREGISTERUSER,
    WRONGDESLOGUED
}
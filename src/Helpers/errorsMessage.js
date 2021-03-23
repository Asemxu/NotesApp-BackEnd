const EMPTYFIELDMESSAGE = "Todos los Campos son Obligatorios*"
const EMAILNOTFORMAT = "El formato de email ingresado no es válido"; 
const PASSDONTCOINCIDE = "Las contraseñas no coinciden";
const CANTREGISTERUSER = "No se pudo Registrar el usuario por favor intentelo más tarde";
const EMAILISOBLIGATED = "*El correo es Obligatorio";
const CANTEMAIL = "No se pudo enviar el email por favor intentelo más tarde";
const CANTCHANGEPASS = "No se puede usar el mismo correo para cambiar su contraseña una vez más";

const WRONGPASSWORD =  (correo) =>{
    return `La contraseña ingresada no coincide con la del correo ${correo}`
}
const EXISTUSERWITHEMAIL = (correo) => {
    return `El Usuario con el correo ${correo} ya esta registrado`
} 

const DONTEXISTUSERWITHEMAIL = (correo) => {
    return `El Usuario con el correo ${correo} no existe`
} 

const WRONGMETHOD= (method) =>{
    return `El Metodo ${method} no es el asignado o especificado` 
}

const DONTEXISTUSER = (correo) =>{
    return `No existe ningun usuario registrado con el correo ${correo}`
}

const ISNOTEMAIL = (correo)  =>{
    return `El correo ${correo} ingresado no es un correo aceptado`;
}

const ITSNOTACTIVATED = (correo) =>{
    return `El correo ${correo} no ha activado su cuenta porfavor actívela para poder ingresar`;
}

module.exports = {
    EMPTYFIELDMESSAGE,
    EMAILNOTFORMAT,
    PASSDONTCOINCIDE,
    EXISTUSERWITHEMAIL,
    DONTEXISTUSERWITHEMAIL,
    WRONGPASSWORD,
    CANTREGISTERUSER,
    WRONGMETHOD,
    CANTEMAIL,
    EMAILISOBLIGATED,
    ITSNOTACTIVATED,
    CANTCHANGEPASS,
    DONTEXISTUSER,
    ISNOTEMAIL
}
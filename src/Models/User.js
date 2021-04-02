// const fetch = require('node-fetch')
const encryptar = require('../Utils/encryptar');
const usersDB = require('../Database/db.json');
const writeDataToFile = require('../Utils/writeDataToFile');
const isEmpty = require('../Utils/isEmpty');
const getUUid = require('../Utils/getUUid');
const { CANTCHANGEPASS } = require('../Helpers/errorsMessage');
const { NOTACTIVATED , NOTLOGUED , NOTFOUND } = require('../Helpers/statusCode');

const createUserDB = async (user) =>{
    delete user.recontraseña;
    user.contraseña = await encryptar(user.contraseña);
    user.isLogued = NOTLOGUED;
    user.isActivated = NOTACTIVATED;
    user.avatar = "";
    usersDB.users.push(user);
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);
    return user;
}

const isfindUserDB   = async (correoUser) =>{
    const encontro = usersDB.users.find(user => user.correo === correoUser );
    return isEmpty(encontro);
}

const setIsLogued = async (userData) =>{
    const userDBIndex = usersDB.users.findIndex(user => user.correo === userData.correo);
    usersDB.users[userDBIndex] = {...usersDB.users[userDBIndex],isLogued:true};
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);
    return {
        id : usersDB.users[userDBIndex].id,
        nombres : usersDB.users[userDBIndex].nombres,
        apellidos: usersDB.users[userDBIndex].apellidos,
        correo : usersDB.users[userDBIndex].correo,
        avatar : usersDB.users[userDBIndex].avatar || ''
    }
}

const setAcountActivated = async (uid) =>{
    const userDBIndex = usersDB.users.findIndex(user => user.id === uid);
    const newID = setChangeUid(uid);
    usersDB.users[userDBIndex] = {...usersDB.users[userDBIndex],isActivated:true};
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);
    return newID;
}

const cambiarContraseña = async  (userData,response) =>{
    delete userData.recontraseña;
    const userDBIndex = usersDB.users.findIndex(user => user.id ===  userData.id);
    if(userDBIndex !== NOTFOUND){
        const newID = getUUid();
        userData.contraseña =  await encryptar(userData.contraseña);
        usersDB.users[userDBIndex] = {...usersDB.users[userDBIndex],contraseña: userData.contraseña,id:newID};
        writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);
        return response;
    }
    response.status = false;
    response.message = CANTCHANGEPASS;
    return response;
   
}

const setChangeUid = (uid) =>{
    const newId = getUUid();
    const userDBIndex = usersDB.users.findIndex(user => user.id === uid);
    usersDB.users[userDBIndex] = {...usersDB.users[userDBIndex],id:newId};
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);
    return newId;
}

const findUserDB  = async (uid) =>{
    return usersDB.users.find(user => user.id === uid);
}

const findUserEmail = async (correo) =>{
    return usersDB.users.find(user => user.correo === correo);
}

const cerrarSesion = async (uid) =>{
    const userDBIndex = usersDB.users.findIndex(user => user.id === uid);
    usersDB.users[userDBIndex] = {...usersDB.users[userDBIndex],isLogued:false};
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB); 
}
 
module.exports = { createUserDB  , isfindUserDB  , setIsLogued , findUserDB  , setAcountActivated , cerrarSesion , findUserEmail , cambiarContraseña}
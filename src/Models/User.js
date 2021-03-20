// const fetch = require('node-fetch')
const encryptarPass = require('../Utils/encryptPass');
const usersDB = require('../Database/db.json');
const writeDataToFile = require('../Utils/writeDataToFile');
const isEmpty = require('../Utils/isEmpty');
const getUUid = require('../Utils/getUUid');
const { NOTACTIVATED , NOTLOGUED } = require('../Helpers/statusCode');

const createUserDB = async (user) =>{
    delete user.recontraseña;
    user.contraseña = await encryptarPass(user.contraseña);
    user.isLogued = NOTLOGUED;
    user.isActivated = NOTACTIVATED;
    usersDB.users.push(user);
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);
    return user;
}

const isFindUserDB  = async (correoUser) =>{
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
        correo : usersDB.users[userDBIndex].correo
    }
}

const setAcountActivated = async (uid) =>{
    const userDBIndex = usersDB.users.findIndex(user => user.id === uid);
    const newID = setChangeUid(uid);
    usersDB.users[userDBIndex] = {...usersDB.users[userDBIndex],isActivated:true};
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);
    return newID;
}

const setChangeUid = (uid) =>{
    const newId = getUUid();
    const userDBIndex = usersDB.users.findIndex(user => user.id === uid);
    usersDB.users[userDBIndex] = {...usersDB.users[userDBIndex],id:newId};
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);
    return newId;
}

const findUserDB = async (uid) =>{
    return usersDB.users.find(user => user.id === uid);
}

const cerrarSesion = async (uid) =>{
    const userDBIndex = usersDB.users.findIndex(user => user.id === uid);
    usersDB.users[userDBIndex] = {...usersDB.users[userDBIndex],isLogued:false};
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB); 
}
 
module.exports = { createUserDB  , isFindUserDB , setIsLogued , findUserDB , setAcountActivated , cerrarSesion}
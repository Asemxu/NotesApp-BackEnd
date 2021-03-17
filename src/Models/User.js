// const fetch = require('node-fetch')
const encryptarPass = require('../Utils/encryptPass');
const getUUid = require('../Utils/getUUid');
const usersDB = require('../Database/db.json');
const writeDataToFile = require('../Utils/writeDataToFile');
const isEmpty = require('../Utils/isEmpty');

const createUserDB = async (user) =>{
    delete user.recontraseña;
    user.contraseña = await encryptarPass(user.contraseña);
    user.id = getUUid();
    usersDB.users.push(user);
    writeDataToFile(`${process.env['DATABASE_PATH']}`,usersDB);

}

const findUserDB  = async (correoUser) =>{
    const encontro = usersDB.users.find(user => user.correo === correoUser );
    return isEmpty(encontro);
}

const setIsLogued = async (userData) =>{

}
 
module.exports = { createUserDB  , findUserDB , setIsLogued}
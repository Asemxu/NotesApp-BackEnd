const isEmpty = (object) => { 
    return {status : object === undefined, user: object} ;
}


module.exports = isEmpty;
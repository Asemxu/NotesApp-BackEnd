const getTemplateChangePassword = (userData) =>{
    return`<div>
                <h2>Hola ${userData.nombres} ${userData.apellidos} </h2>
                <p> 
                    Por favor haga click  <a target="_blank" href="${process.env['PAGE_HOST']}actualizar-contraseña/${userData.id}"> aqui </a> en este link para cambiar su contraseña 
                </p>
            </div>`
}


module.exports = getTemplateChangePassword;



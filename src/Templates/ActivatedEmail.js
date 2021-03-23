const getTemplateEmailActivated = (userData) =>{
    return`<div>
        <h2>Bienvenido a App Notes ${userData.nombres} ${userData.apellidos} </h2>
        <p> 
            Por favor haga click  <a target="_blank" href="${process.env['PAGE_HOST']}activacion-confirmada/${userData.id}"> aqui </a> en este link para activar su cuenta 
        </p>
    </div>`
}


module.exports = getTemplateEmailActivated;
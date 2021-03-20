const getTemplateEmailActivated = (userData) =>{
    return`<div>
        <h2>Bienvenidao a App Notes ${userData.nombres} ${userData.apellidos} </h2>
        <p> 
            Por favor haga click  <a target="_blank" href="http://localhost:3001/activacion-confirmada/${userData.id}"> aqui </a> en este link para activar su cuenta 
        </p>
    </div>`
}


module.exports = getTemplateEmailActivated;
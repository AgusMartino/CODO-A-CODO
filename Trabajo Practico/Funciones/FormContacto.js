let email = document.getElementById('email')
let tipo_de_contacto = document.getElementById('Tipo_de_contacto')
let comentario = document.getElementById('comentarios')
let form = document.getElementById('formContacto')
let errorEmail = document.getElementById('errorEmail')
errorEmail.style.color = "red"
let errorTipoDeContacto = document.getElementById('errorTipoDeContacto')
errorTipoDeContacto.style.color = "red"
let errorComentarios = document.getElementById('errorComentarios')
errorComentarios.style.color = "red"

form.addEventListener('submit', e =>{
    e.preventDefault()
    console.log('Enviando Comentarios...')

    let mensajeErrorEmail = []
    let mensajeErrorTipoDeContacto = []
    let mensajeErrorComentario = []
    
    if(email.value === null || email.value === ''){
        mensajeErrorEmail.push('Ingresar Email')
    }
    if(tipo_de_contacto.value === null || tipo_de_contacto.value === ''){
        mensajeErrorTipoDeContacto.push('Seleccionar Tipo de contacto')
    }
    if(comentario.value === null || comentario.value === ''){
        mensajeErrorComentario.push('Ingresar un comentario')
    }

    errorComentarios.innerHTML = mensajeErrorComentario
    errorEmail.innerHTML = mensajeErrorEmail
    errorTipoDeContacto.innerHTML = mensajeErrorTipoDeContacto
    return false;
})

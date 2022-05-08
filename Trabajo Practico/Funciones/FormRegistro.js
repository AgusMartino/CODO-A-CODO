let nombre = document.getElementById('name');
let apellido = document.getElementById('lastname');
let email = document.getElementById('email');
let codigo_pais = document.getElementById('codigo_pais');
let codigo_area = document.getElementById('codigo_area');
let numero = document.getElementById('numero');
let dni = document.getElementById('dni');
let password = document.getElementById('password');
let repeat_password = document.getElementById('repeat_password');
let terms = document.getElementById('terms');
let errorNombre = document.getElementById('errorName');
errorNombre.style.color = 'red';
let errorApellido = document.getElementById('errorLastName');
errorApellido.style.color = 'red';
let errorEmail = document.getElementById('errorEmail');
errorEmail.style.color = 'red';
let errorTelefono = document.getElementById('errorTelefono');
errorTelefono.style.color = 'red';
let errorDni = document.getElementById('errorDNI');
errorDni.style.color = 'red';
let errorPassword = document.getElementById('errorContraseña');
errorPassword.style.color = 'red';
let errorValidadorContraseña = document.getElementById('errorValidadorContraseña');
errorValidadorContraseña.style.color = 'red';
let errorTerms = document.getElementById('errorTerms');
errorTerms.style.color = 'red';
const form = document.getElementById('formRegistro')

form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log('Enviado informacion....');

    let mensajeErrorNombre = [];
    let mensajeErrorApellido = [];
    let mensajeErrorEmail = [];
    let mensajeErrorTelefono = [];
    let mensajeErrorDNI = [];
    let mensajeErrorContraseña = [];
    let mensajeErrorValidadorContraseña = [];
    let mensajeErrorTerms = [];

    if(nombre.value === null || nombre.value === ''){
        mensajeErrorNombre.push('Ingresa tu nombre')
    }
    if(apellido.value === null || apellido.value === ''){
        mensajeErrorApellido.push('Ingresa tu apellido')
    }
    if(email.value === null || email.value === ''){
        mensajeErrorEmail.push('Ingresa tu email')
    }
    if(codigo_pais.value === null || codigo_pais.value === ''){
        mensajeErrorTelefono.push('Ingresa tu codigo de pais del telefono')
    }else{
        if(codigo_area.value === null || codigo_area.value === ''){
            mensajeErrorTelefono.push('Ingresa tu codigo de area del telefono')
        }else{
            if(numero.value === null || numero.value === ''){
                mensajeErrorTelefono.push('Ingresa tu numero de telefono')
            }
        }
    }
    if(dni.value === null || numero.value === ''){
        mensajeErrorDNI.push('Ingresa tu DNI')
    }
    if(password.value === null || password.value === ''){
        mensajeErrorContraseña.push('Ingresa tu contraseña')
    }
    if(repeat_password.value === null || repeat_password.value === '' || repeat_password.value !== password.value){
        mensajeErrorValidadorContraseña.push('Las contraseñas no coiciden')
    }
    if(!terms.checked){
        mensajeErrorTerms.push('Acepta Terminos y condiciones')
    }

    errorNombre.innerHTML = mensajeErrorNombre
    errorApellido.innerHTML = mensajeErrorApellido
    errorEmail.innerHTML = mensajeErrorEmail
    errorTelefono.innerHTML = mensajeErrorTelefono
    errorDni.innerHTML = mensajeErrorDNI
    errorPassword.innerHTML = mensajeErrorContraseña
    errorValidadorContraseña.innerHTML = mensajeErrorValidadorContraseña
    errorTerms.innerHTML = mensajeErrorTerms

    return false;
})

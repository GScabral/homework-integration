export default (data)=>{
    let error= {}

    if(!data.email.includes('@')){
        error.e1='email is no valid'
    }
    if(!data.email){
        error.e2='ingrese email'
    }
    if(data.email.length > 35){
        error.e3='no puede superar los 35 caracteres'
    }
    if(!/\d/.test(data.password)){
        error.p1='al menos debe contener 1 numero'
    }
    if(data.password.length < 6 || data.password.legth >10){
        error.p2='longitud incorrecta debe tener al menos 6 caracteres'
    }
}
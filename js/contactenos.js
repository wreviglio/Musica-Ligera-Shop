
function validateEmail(){
                
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if( validEmail.test( jQuery('#user-email').val() ) ){
        alert('el Email es valido');
        return true;
    }else{
        alert('Email invalido');
        return false;
    }
}


function ValidarInfo() {
    
  
    if (document.Formulario.Nombre.value.length  == 0 ) {
        alert("Por favor, escriba su nombre")
        document.Formulario.Nombre.focus()
        return 0
    }
    
    if (document.Formulario.Apellido.value.length  == 0 ) {
        alert("Por favor, escriba su apellido")
        document.Formulario.Nombre.focus()
        return 0
    }
    

    Telefono = document.Formulario.Telefono.value
    Telefono = validarEntero(Telefono)
    document.Formulario.Telefono.value = Telefono
    
    
    
    if (Telefono == "") {
        alert("Por favor,introducir un número de celular")
        document.Formulario.Telefono.focus()
        return 0
    } 

    if (document.Formulario.userEmail.value.length  == 0 ) {
        alert("Por favor, escriba un correo para contactarle")
        document.Formulario.Correo.focus()
        return 0
    }

    
    if (document.Formulario.Comentarios.value.length == 0) {
        alert("Por favor, dejar un comentario o consulta más extensa para atenderle mejor ")
        document.Formulario.Comentarios.focus()
        return 0
    }

    
    alert("Muchas gracias por enviar el formulario,esperamos poder contactarle pronto")
    document.fvalida.submit()
}

function validarEntero(valor) {
    //Validar valores numericos
    valor = parseInt(valor)

    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
    }
}

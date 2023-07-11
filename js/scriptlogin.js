
    function Login(){ 
    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    if ((usuario=="USUARIO1" && password=="CONTRASEÑA1")||(usuario=="USUARIO2" && password=="CONTRASEÑA2")) { 
    window.location="./crud.html"; 
    } 
    else{ 
               alert("Por favor ingrese nombre de usuario y contraseña correcto."); 
          } 
    } 
  
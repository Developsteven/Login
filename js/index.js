function validar(){
    var email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    var objeto = {
        email : "steven@gmail.com",
        password : 1234
    }

    if (email === objeto.email || password === objeto.password){
        alert("buen trabajo");
        return false;
    }
    else {
        alert("datos erroneos");
        // document.getElementById("validar").innerHTML = "E-mail o password incorrectos";
    }
    
}

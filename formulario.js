var nameRegex=/^\w\D+\s+\w\D+$/;
var passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
var emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

window.onload=()=>{

    document.addEventListener('submit', (e)=>{
        e.preventDefault();

        if(validName()){
            document.getElementById("nombre").innerHTML="";
            document.getElementById("nombre").style.color = "";
        }
        if(validPassword()){
            document.getElementById("contrase").innerHTML="";
            document.getElementById("contrase").style.color = "";
            document.getElementById("contrase2").innerHTML="";
            document.getElementById("contrase2").style.color = "";
        }
        if(validEmail()){
            document.getElementById("correo").innerHTML="";
            document.getElementById("correo").style.color="";
        }

    })
};



function validName(){
    var name=document.getElementById("name");

    if(name.value==""){
        document.getElementById("nombre").innerHTML=`Debe introducir nombre y apellido!`;
        document.getElementById("nombre").style.color = "#ff0000";
    }else if(!nameRegex.test(name.value)){
        document.getElementById("nombre").innerHTML=`Debe de introducir nombre y apellido validos`;
        document.getElementById("nombre").style.color = "#ff0000";
        document.getElementById("name").focus();
    }else{
        return true;
    }

}

function validPassword(){
 
    var pass=document.getElementById("pass");
    var passConf=document.getElementById("passConf");

    if(pass.value==""){
        document.getElementById("contrase").innerHTML=`Debe introducir una contraseña!`;
        document.getElementById("contrase").style.color = "#ff0000";
    }
    else if(!passRegex.test(pass.value)){
    
        document.getElementById("contrase").innerHTML=`contraseña incorrecta la contraseña debe de tener por lo menos 8 caracteres\n una mayuscula, una minuscula \n un numero \n caracter especial!`;
        document.getElementById("contrase").style.color = "#ff0000";
    }
    else if(passConf.value!=pass.value){
        document.getElementById("contrase2").innerHTML=`Debe comprobar la contraseña!`;
        document.getElementById("contrase2").style.color = "#ff0000";
    }else{
        return true;
    }

}

function validEmail(){
    let email=document.getElementById("email");
    if(email.value==""){
        document.getElementById("correo").innerHTML=`Debe introducir correo electronico`;
        document.getElementById("correo").style.color = "#ff0000";
    }
    else if(!emailRegex.test(email.value)){
    }
    else{
        return true;
    }
}


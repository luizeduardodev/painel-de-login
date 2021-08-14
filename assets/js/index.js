//Função para mostrar a senha ou não;
const showPassword = () => {
    const eyeSlash = document.getElementById("eye-slash");
    const eye = document.getElementById("eye");
    const fieldPassword = document.getElementById("field-password");

    if(eye.style.display === "none"){
        eye.style.display = "block";
        eyeSlash.style.display = "none";
        fieldPassword.type = "text";
    }else{
        eye.style.display = "none";
        eyeSlash.style.display = "block";
        fieldPassword.type = "password";
    }
}

document.getElementById("btn-login").addEventListener("click", function(e){
    e.preventDefault();
    alert("Logado!");
});
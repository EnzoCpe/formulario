const campoDoFormulario = document.querySelectorAll(".requerido");

 campoDoFormulario.forEach(function(input){
    input.addEventListener('change',function(){

        if(input.value !== ""){
            input.classList.remove('nao-validado')
            input.classList.add('validado')
            input.nextElementSibling.remove('alerta')
        }
            
    })
 })

 const enviarFormulario = document.querySelector(".buttom")

 enviarFormulario.addEventListener('click', function(enviar){
    enviar.preventDefault()
    campoDoFormulario.forEach(function(input){

        if(input.value === ""){
            input.classList.add('nao-validado')
            input.nextElementSibling.classList.add('alerta')   
        }
    })
 })


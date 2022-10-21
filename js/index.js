window.onload = function(){
    var botonEnviar = document.getElementById("botonEnviar");
    
    botonEnviar.addEventListener('click',(event)=>{
        event.preventDefault();
        
        let tipoDeBuscador = document.getElementById("buscadores")
        let inputUsuario = tipoDeBuscador.value
        let url = ""
        let inputValido = true;
        switch(inputUsuario){
            case "genero":
                url = "genero.html"
                break;
            case "pais": 
                url = "pais.html"
                break;
            default:
                alert(inputUsuario + " no es un tipo de buscador válido!");
                inputValido = false;
        }
        if(inputValido){
            
            let tituloElement = document.getElementById("pulso")
                tituloElement.classList.add("pulsoActivado");

            setTimeout(()=>{
                console.log(url)
                window.location.href = url
                
            }, 1800
                
            )
        }



    })
}
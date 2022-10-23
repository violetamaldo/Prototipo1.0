window.onload = function validarContacto(){
    
    var formulario = document.getElementsByName("formulario")[0];
    console.log(formulario)
    var elementos = formulario.elements;
    var boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.validarNombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
                    }
    };

    var validarApellidos = function(e){
        if (formulario.validarApellidos.value == 0){
            alert("Completa el campo apellidos");
            e.preventDefault();
                    }
    };

    var validarEmail = function(e) {
        if (formulario.validarEmail.value == 0){
            alert("Completa el campo e-mail");
            e.preventDefault();
                    }
    };
    
    var validarMensaje = function(e){
        if (formulario.validarMensaje.value == 0){
            alert("Completa el campo mensaje");
            e.preventDefault();
                     }
    };

    var validar = function(e){
        validarNombre(e);
        validarApellidos(e);
        validarEmail(e);
        validarMensaje(e);
    };
    formulario.addEventListener("submit", validar);
    console.log(formulario) 


}
validarContacto();


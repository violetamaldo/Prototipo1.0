function validarContacto(){
    //Variables
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
            alert("Completa el campo apellido");
            e.preventDefault();
                    }
    };

    var validarEmail = function(e){
        if (formulario.validarEmail.value == 0){
        } else {
            alert("Completa el campo e-mail");
            e.preventDefault();
        }
    };
    
    var validarCheckbox = function(e){
        if (formulario.terminos.checked == false){
            alert("Acepta los términos y condiciones");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarRadio(e);
        validarCheckbox(e);
    };
    formulario.addEventListener("submit", validar);
    console.log(formulario) 


}
validarContacto();


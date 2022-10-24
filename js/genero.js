function cambiarSection() {
    const container = document.getElementById('section')
        container.innerHTML = `
        <div class="genero" id="genero"></div>
        `;
}

function llamarPlaylistRock() {   
    playlist = 2 
    fetch('https://mocki.io/v1/92f00cb6-f708-45ea-a19d-f4a443ea22b8')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            printPlaylist(json);       
    });
}

function printPlaylist(listaCanciones) {
    const genero = document.getElementById('genero')
    listaCanciones.forEach(cancion => {
    genero.innerHTML = `
    ${genero.innerHTML}
    <div class="card">
    <img src="${cancion.img}">
    <span>
    <video width="230" height="240" controls>
        <source src="${cancion.src["id"]}">
    </video>
    </span>
    <h3>${cancion.name}</h3>
    </card>
    `;
    });
}

window.onload = function(){
    var botonEnviar = document.getElementById("botonEnviar");
    
    botonEnviar.addEventListener('click',(event)=>{
        event.preventDefault();
        
        let tipoDeBuscador = document.getElementById("buscadorGenero")
        let inputUsuario = tipoDeBuscador.value
        let inputValido = true;
        if(inputValido){
            
            let tituloElement = document.getElementById("pulso")
                tituloElement.classList.add("pulsoActivado");

            setTimeout(()=>{
                cargarCategoriaSegunInput(inputUsuario) 
            }, 1800
      
            )
        }
    });  
   
    function cargarCategoriaSegunInput(loQueMePasaron) {        
        switch (loQueMePasaron) {
            case "rock":
                cambiarSection()
                llamarPlaylistRock()
                break;
            case "pop": 
                cambiarSection()
                llamarPlaylistRock()
                break;
            case "clasica":
                cambiarSection()
                llamarPlaylistRock()
                break;
            case "techno":
                cambiarSection()
                llamarPlaylistRock()
                break;
            default:
                alert(inputUsuario + " no es un tipo de buscador válido!");
                inputValido = false;
            }  
    }
}


 
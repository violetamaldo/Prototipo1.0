function cambiarSection() {
    const container = document.getElementById('section')
        container.innerHTML = `
        <div class="genero" id="genero"></div>
        <style> 
        main {
            background-color: transparent;
            background-image: url(img/notitas.png);
        }
        </style>
        `;
}

function llamarPlaylistRock() {   
    playlist = 2 
    fetch('https://mocki.io/v1/e41359b3-46d8-43b6-ba62-3aaaaa916a9d')
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
    <iframe width="230" height="240" src="${cancion.src.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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


 
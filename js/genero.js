function cambiarSection() {
    const container = document.getElementById('section')
        container.innerHTML = `<div id="genero"></div>`;
    }

window.onload = function(){
    var botonEnviar = document.getElementById("botonEnviar");
    
    botonEnviar.addEventListener('click',(event)=>{
        event.preventDefault();
        
        let tipoDeBuscador = document.getElementById("buscadorGenero")
        let inputUsuario = tipoDeBuscador.value
        let HTML = ""
        let inputValido = true;
        switch(inputUsuario){
            case "rock":
                cambiarSection()
                printPokemons(pokemons)
                break;
            case "pop": 
                url = "pais.html"
                break;
            case "clasica":
                url = "clasica.html"
                break;
            case "techno":
                url = "techno.html"
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

fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => {
            printPokemons(json.results);
        });

// Pinta todos los pokemos insertando un HTML dentro del #container
function printPokemons(pokemons) {
  const container = document.getElementById('genero')
  pokemons.forEach(pokemon => {
    container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(pokemon.url)}.png"/>
    <span>Nº.${getPokemonId(pokemon.url)}</span>
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </card>
  `;
  });
}

// En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
// una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
// así que le extraigo el ID a la URL
function getPokemonId(url) {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
}
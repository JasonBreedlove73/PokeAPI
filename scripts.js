async function fetchData() {
    try {
       
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();       
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
       
        if (!response.ok) {            
            throw new Error("Invalid Pokemon name. Try again.");
        }
         
        const pokemonTitle = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        const pokemonSprite = data.sprites.front_default;
              
        const imgElement = document.getElementById("pokemonSprite");
        const titleElement = document.getElementById("pokemon-name");
                
        imgElement.src = pokemonSprite;
                
        titleElement.textContent = pokemonTitle;
             
        imgElement.style.display = "block";

    } catch (error) {
       
        alert(error.message);
        
      
        const titleElement = document.getElementById("pokemon-name");
        titleElement.textContent = error.message;

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.style.display = "none";
    }
}


function searchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value;
    if (pokemonName) {
        fetchData(pokemonName);
    } else {
        alert('Enter Pokemon name');
    }
}
